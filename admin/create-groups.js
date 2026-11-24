// Create the group logins and group documents.
//
// 1. Copy groups.example.json to groups.json and fill in one line per group:
//      { "grade": 6, "topic": 1 }
//    (no names anywhere - you match codes to names on your own list)
// 2. Run:  node create-groups.js
// 3. It prints a code sheet and also saves it to code-sheet-<date>.txt.
//    Print it, write the names next to the codes, and keep that sheet safe:
//    each code IS the group's login. groups.json and the sheet are in
//    .gitignore - never commit them.
//
// Safe to re-run: a group whose code is in groups.json and already exists is
// left alone.

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { auth, db, newCode, GROUP_DOMAIN } from "./setup.js";

import { normalizeCode, groupPassword } from "../group-credentials.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const groups = JSON.parse(readFileSync(join(here, "groups.json"), "utf8"));

const rows = [];
for (const g of groups) {
  const code = normalizeCode(g.code || newCode());
  const email = code + GROUP_DOMAIN;
  let uid;
  try {
    const user = await auth.createUser({ email, password: groupPassword(code) });
    uid = user.uid;
  } catch (e) {
    if (e.code === "auth/email-already-exists") {
      uid = (await auth.getUserByEmail(email)).uid;
      console.log(`${code}: account already exists, keeping it`);
    } else throw e;
  }
  await db.collection("groups").doc(code).set(
    { uid, code, grade: g.grade ?? null, topic: g.topic },
    { merge: true }
  );
  rows.push({ code, grade: g.grade ?? null, topic: g.topic });
}

const lines = [
  "CHANUKAH EXPO - GROUP CODES",
  "Each code is that group's whole login. Keep this sheet safe.",
  "",
  ...rows.map(r => `Code: ${r.code.toUpperCase()}    Grade ${r.grade || "not assigned"}    Topic ${r.topic}    Names: ______________________`)
];
const text = lines.join("\n");
console.log("\n" + text);
const file = join(here, `code-sheet-${new Date().toISOString().slice(0, 10)}.txt`);
writeFileSync(file, text + "\n");
console.log(`\nSaved: ${file}  (not committed - in .gitignore)`);
