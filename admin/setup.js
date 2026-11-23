// Shared setup for the admin scripts.
// Needs a service account key: Firebase console > Project settings >
// Service accounts > Generate new private key. Save it in this folder as
// serviceAccount.json (never commit it - it is in .gitignore).
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { randomInt } from "crypto";

const here = dirname(fileURLToPath(import.meta.url));

export const GROUP_DOMAIN = "@groups.bha-expo.app";

const key = JSON.parse(readFileSync(join(here, "serviceAccount.json"), "utf8"));
const app = initializeApp({ credential: cert(key) });
export const auth = getAuth(app);
export const db = getFirestore(app);

// Codes are 8 characters from an alphabet with no look-alikes
// (no i, l, o, 0, 1). Kids type them in any case; the site lowercases.
const ALPHA = "abcdefghjkmnpqrstuvwxyz23456789";
export function newCode() {
  let s = "";
  while (s.length < 8) s += ALPHA[randomInt(ALPHA.length)];
  return s;
}
