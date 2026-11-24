// Give one group a fresh code (their old code stops working right away).
// Use it if a code gets shared around or lost.
//
// Run:  node reset-password.js <current code> [new code]
// If you leave out the new code, a random one is generated.
// The group's proposal and quiz results move to the new code.

import { auth, db, newCode, GROUP_DOMAIN } from "./setup.js";

import { normalizeCode, groupPassword } from "../group-credentials.mjs";

const [oldCodeRaw, newCodeRaw] = process.argv.slice(2);
if (!oldCodeRaw) {
  console.error("Usage: node reset-password.js <current code> [new code]");
  process.exit(1);
}
const oldCode = normalizeCode(oldCodeRaw);
const newC = normalizeCode(newCodeRaw || newCode());

const oldSnap = await db.collection("groups").doc(oldCode).get();
if (!oldSnap.exists) {
  console.error(`No group with code ${oldCode.toUpperCase()}.`);
  process.exit(1);
}
const data = oldSnap.data();

// New auth account. Both client and admin use the same public transform.
const user = await auth.createUser({ email: newC + GROUP_DOMAIN, password: groupPassword(newC) });
await db.collection("groups").doc(newC).set(
  { uid: user.uid, code: newC, grade: data.grade, topic: data.topic },
  { merge: true }
);

// Move the group's work over.
const prop = await db.collection("groups").doc(oldCode).collection("work").doc("proposal").get();
if (prop.exists) await db.collection("groups").doc(newC).collection("work").doc("proposal").set(prop.data());
const quiz = await db.collection("groups").doc(oldCode).collection("quiz").get();
for (const d of quiz.docs) await db.collection("groups").doc(newC).collection("quiz").add(d.data());

// Remove the old account and documents.
try { await auth.deleteUser(data.uid); } catch (e) { console.log("Old login already gone."); }
for (const d of quiz.docs) await d.ref.delete();
await db.collection("groups").doc(oldCode).collection("work").doc("proposal").delete().catch(() => {});
await db.collection("groups").doc(oldCode).delete();

console.log(`Done. The group's new code is:  ${newC.toUpperCase()}`);
console.log("The old code no longer works. Give the group the new code.");
