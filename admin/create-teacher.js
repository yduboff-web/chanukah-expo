// Create (or update) the teacher login and print the UID that goes into
// firestore.rules.
//
// Run:  node create-teacher.js <email> [password]
// If you leave out the password, a strong random one is generated and printed
// once - save it somewhere safe.
//
// Then open firestore.rules, replace TEACHER_UID with the UID printed below,
// and deploy the rules:  firebase deploy --only firestore:rules

import { randomBytes } from "crypto";
import { auth } from "./setup.js";

const [email, passwordArg] = process.argv.slice(2);
if (!email) {
  console.error("Usage: node create-teacher.js <email> [password]");
  process.exit(1);
}
const password = passwordArg || randomBytes(12).toString("base64url");

let user;
try {
  user = await auth.createUser({ email, password });
  console.log(`Created teacher account ${email}`);
} catch (e) {
  if (e.code === "auth/email-already-exists") {
    user = await auth.updateUser((await auth.getUserByEmail(email)).uid, { password });
    console.log(`Updated the password for ${email}`);
  } else throw e;
}

console.log(`\nTeacher UID:  ${user.uid}`);
if (!passwordArg) console.log(`Password:     ${password}   (shown once - save it now)`);
console.log("\nNext: put the UID in firestore.rules in place of TEACHER_UID,");
console.log("then run:  firebase deploy --only firestore:rules");
