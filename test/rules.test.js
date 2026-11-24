// Security-rules tests for the Chanukah Expo, run against the Firestore
// emulator. Covers spec tests 1-6. Spec test 7 (client sign-up fails) is an
// Authentication setting, not a rule - check it in the Firebase console:
// Authentication > Settings > User actions > Enable create (sign-up) = off.
//
// Start the emulator first (needs Java):
//   npx firebase-tools emulators:start --only firestore --project demo-expo
// Then in another terminal, from this folder:
//   npm install && npm test

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { initializeTestEnvironment, assertFails, assertSucceeds } from "@firebase/rules-unit-testing";
import { doc, getDoc, setDoc, updateDoc, deleteDoc, addDoc, getDocs, collection, serverTimestamp, deleteField } from "firebase/firestore";

const TEACHER_UID = "yGiW0H7NHteL49G6dBu1nx1Hz5Y2";
const here = dirname(fileURLToPath(import.meta.url));
const rules = readFileSync(join(here, "..", "firestore.rules"), "utf8").replaceAll("TEACHER_UID", TEACHER_UID);

process.env.FIRESTORE_EMULATOR_HOST = process.env.FIRESTORE_EMULATOR_HOST || "127.0.0.1:8080";

const testEnv = await initializeTestEnvironment({
  projectId: "demo-expo",
  firestore: { rules }
});

const GROUP_A = "aaaa1111", GROUP_B = "bbbb2222";
const uidA = "uid-a", uidB = "uid-b";

async function seed() {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    const db = ctx.firestore();
    await setDoc(doc(db, "groups", GROUP_A), { uid: uidA, code: GROUP_A, grade: 6, topic: 1 });
    await setDoc(doc(db, "groups", GROUP_B), { uid: uidB, code: GROUP_B, grade: 5, topic: 2 });
  });
}
const asA = () => testEnv.authenticatedContext(uidA).firestore();
const asB = () => testEnv.authenticatedContext(uidB).firestore();
const asTeacher = () => testEnv.authenticatedContext(TEACHER_UID).firestore();
const asAnon = () => testEnv.unauthenticatedContext().firestore();

const prop = (db, gid) => doc(db, "groups", gid, "work", "proposal");
const quizCol = (db, gid) => collection(db, "groups", gid, "quiz");
const validProposal = { idea: "a booth", see: "", make: "", today: "", materials: "", status: "draft", updatedAt: serverTimestamp() };
const validRound = { score: 4, total: 5, mode: "mine", at: serverTimestamp() };

let pass = 0, fail = 0;
async function check(name, promise, shouldPass) {
  try {
    const assertion = shouldPass ? assertSucceeds(promise) : assertFails(promise);
    await assertion;
    pass++; console.log(`ok   ${name}`);
  } catch (e) {
    fail++; console.log(`FAIL ${name}\n     ${e.message}`);
  }
}

await testEnv.clearFirestore();
await seed();

console.log("\n-- 1. Signed out --");
await check("anon cannot read a group", getDoc(doc(asAnon(), "groups", GROUP_A)), false);
await check("anon cannot list groups", getDocs(collection(asAnon(), "groups")), false);
await check("anon cannot read a proposal", getDoc(prop(asAnon(), GROUP_A)), false);
await check("anon cannot write a proposal", setDoc(prop(asAnon(), GROUP_A), validProposal), false);
await check("anon cannot read quiz results", getDocs(quizCol(asAnon(), GROUP_A)), false);
await check("anon cannot add a quiz result", addDoc(quizCol(asAnon(), GROUP_A), validRound), false);

console.log("\n-- 2. Group A vs group B --");
await check("A cannot read B's group doc", getDoc(doc(asA(), "groups", GROUP_B)), false);
await check("A cannot read B's proposal", getDoc(prop(asA(), GROUP_B)), false);
await check("A cannot write B's proposal", setDoc(prop(asA(), GROUP_B), validProposal), false);
await check("A cannot read B's quiz", getDocs(quizCol(asA(), GROUP_B)), false);
await check("A cannot add to B's quiz", addDoc(quizCol(asA(), GROUP_B), validRound), false);

console.log("\n-- 3. Group cannot approve itself or change the teacher note --");
await check("A cannot create with status approved", setDoc(prop(asA(), GROUP_A), { ...validProposal, status: "approved" }), false);
await check("A cannot create with a teacherNote", setDoc(prop(asA(), GROUP_A), { ...validProposal, teacherNote: "x" }), false);
await check("A can create a draft", setDoc(prop(asA(), GROUP_A), validProposal), true);
await check("A cannot flip status to approved", updateDoc(prop(asA(), GROUP_A), { status: "approved", updatedAt: serverTimestamp() }), false);

console.log("\n-- teacher approves A, then: --");
await check("teacher can approve", updateDoc(prop(asTeacher(), GROUP_A), { status: "approved", updatedAt: serverTimestamp() }), true);

console.log("\n-- 4. Approved proposal is locked --");
await check("A cannot edit an approved proposal", updateDoc(prop(asA(), GROUP_A), { idea: "changed", updatedAt: serverTimestamp() }), false);

console.log("\n-- send back, then group works again --");
await check("teacher can send back with a note", updateDoc(prop(asTeacher(), GROUP_A), { status: "changes", teacherNote: "more detail please", updatedAt: serverTimestamp() }), true);
await check("A keeps the teacher note while editing", setDoc(prop(asA(), GROUP_A), { ...validProposal, idea: "better booth", teacherNote: "more detail please" }, { merge: true }), true);
await check("A cannot delete the teacher note", updateDoc(prop(asA(), GROUP_A), { teacherNote: deleteField(), updatedAt: serverTimestamp() }), false);
await check("A cannot rewrite the teacher note", updateDoc(prop(asA(), GROUP_A), { teacherNote: "", updatedAt: serverTimestamp() }), false);
await check("A can submit", updateDoc(prop(asA(), GROUP_A), { status: "submitted", updatedAt: serverTimestamp() }), true);

console.log("\n-- 5. Groups and quiz results are protected --");
await check("A cannot create a group doc", setDoc(doc(asA(), "groups", "cccc3333"), { uid: uidA, code: "cccc3333", grade: 6, topic: 1 }), false);
await check("A cannot edit its group doc", updateDoc(doc(asA(), "groups", GROUP_A), { topic: 9 }), false);
await check("A can add a quiz round", addDoc(quizCol(asA(), GROUP_A), validRound), true);
await testEnv.withSecurityRulesDisabled(async (ctx) => setDoc(doc(ctx.firestore(), "groups", GROUP_B, "quiz", "round1"), { score: 1, total: 5, mode: "all", at: new Date() }));
const roundRef = doc(asB(), "groups", GROUP_B, "quiz", "round1");
await check("B cannot edit a quiz round", updateDoc(roundRef, { score: 5 }), false);
await check("B cannot delete a quiz round", deleteDoc(roundRef), false);
await check("A cannot add a quiz round with bad fields", addDoc(quizCol(asA(), GROUP_A), { score: 99, total: 5, mode: "mine", at: serverTimestamp() }), false);

console.log("\n-- 6. Teacher can read everything --");
await check("teacher reads group A", getDoc(doc(asTeacher(), "groups", GROUP_A)), true);
await check("teacher lists groups", getDocs(collection(asTeacher(), "groups")), true);
await check("teacher reads A's proposal", getDoc(prop(asTeacher(), GROUP_A)), true);
await check("teacher reads A's quiz", getDocs(quizCol(asTeacher(), GROUP_A)), true);

console.log("\n-- held topics (teacher only) --");
await testEnv.withSecurityRulesDisabled(async (ctx) => { await setDoc(doc(ctx.firestore(), "heldTopics", "4"), { json: "{}" }); });
await check("teacher reads a held topic", getDoc(doc(asTeacher(), "heldTopics", "4")), true);
await check("group A cannot read a held topic", getDoc(doc(asA(), "heldTopics", "4")), false);
await check("anonymous cannot read a held topic", getDoc(doc(asAnon(), "heldTopics", "4")), false);
await check("group A cannot list held topics", getDocs(collection(asA(), "heldTopics")), false);
await check("teacher cannot write a held topic from the site", setDoc(doc(asTeacher(), "heldTopics", "4"), { json: "x" }), false);

console.log("\n-- happy paths --");
await check("A reads its own group doc", getDoc(doc(asA(), "groups", GROUP_A)), true);
await check("A reads its own proposal", getDoc(prop(asA(), GROUP_A)), true);
await check("A reads its own quiz", getDocs(quizCol(asA(), GROUP_A)), true);

console.log(`\n${pass} passed, ${fail} failed`);
await testEnv.cleanup();
process.exit(fail ? 1 : 0);
