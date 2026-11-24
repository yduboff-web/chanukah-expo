// After the expo: export every proposal and quiz result to a CSV file, then
// delete the group logins and all group data.
//
// Dry run (export only, deletes nothing):
//   node export-and-cleanup.js
// Really delete everything after the export:
//   node export-and-cleanup.js --yes

import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { auth, db } from "./setup.js";

const here = dirname(fileURLToPath(import.meta.url));
const reallyDelete = process.argv.includes("--yes");

const csv = (v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
const rows = [["code", "grade", "topic", "type", "status_or_mode", "content_or_score", "updated_or_played_at"]];

const groups = await db.collection("groups").get();
for (const g of groups.docs) {
  const gd = g.data();
  const prop = await g.ref.collection("work").doc("proposal").get();
  if (prop.exists) {
    const p = prop.data();
    const content = ["idea", "see", "make", "today", "materials"]
      .map(k => `${k.toUpperCase()}:\n${p[k] || ""}`).join("\n\n");
    rows.push([gd.code, gd.grade, gd.topic, "proposal", p.status || "draft",
      content, p.updatedAt && p.updatedAt.toDate ? p.updatedAt.toDate().toISOString() : ""]);
  }
  const quiz = await g.ref.collection("quiz").get();
  for (const q of quiz.docs) {
    const d = q.data();
    rows.push([gd.code, gd.grade, gd.topic, "quiz", d.mode || "",
      `${d.score} of ${d.total}`, d.at && d.at.toDate ? d.at.toDate().toISOString() : ""]);
  }
}

const file = join(here, `expo-export-${new Date().toISOString().slice(0, 10)}.csv`);
writeFileSync(file, rows.map(r => r.map(csv).join(",")).join("\n") + "\n");
console.log(`Exported ${rows.length - 1} records to ${file}`);

if (!reallyDelete) {
  console.log("\nDry run only - nothing was deleted.");
  console.log("Check the CSV, then run again with --yes to delete all group logins and data.");
  process.exit(0);
}

for (const g of groups.docs) {
  const gd = g.data();
  const quiz = await g.ref.collection("quiz").get();
  for (const d of quiz.docs) await d.ref.delete();
  await g.ref.collection("work").doc("proposal").delete().catch(() => {});
  await g.ref.delete();
  try { await auth.deleteUser(gd.uid); } catch (e) { /* already gone */ }
  console.log(`Deleted group ${String(gd.code || g.id).toUpperCase()} and its login.`);
}
console.log("\nAll group logins and data are deleted. The export CSV is the only copy.");
