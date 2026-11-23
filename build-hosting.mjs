// Copy only the public website files, never repository metadata or admin data.
import { mkdirSync, copyFileSync, rmSync } from "node:fs";
rmSync("public", {recursive:true, force:true});
mkdirSync("public");
for (const file of ["index.html", "data.js", "firebase-config.js", "group-credentials.mjs"]) copyFileSync(file, "public/" + file);
