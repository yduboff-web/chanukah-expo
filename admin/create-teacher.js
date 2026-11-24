// Create the teacher account with a password already generated in Vault.
// Usage: node create-teacher.js <email> <private-password-file>
// The password is never printed. Existing accounts are not changed.
import { readFileSync } from "fs";
import { auth } from "./setup.js";
const [email, path] = process.argv.slice(2);
if (!email || !path) throw new Error("Usage: node create-teacher.js <email> <private-password-file>");
let user;
try { user = await auth.getUserByEmail(email); }
catch (e) {
  if (e.code !== "auth/user-not-found") throw e;
  user = await auth.createUser({email, password: readFileSync(path, "utf8").trim()});
}
console.log(`Teacher UID: ${user.uid}`);
