# Chanukah Expo site

The site for the 5th and 6th grade Chanukah Expo. Each group types its code and gets its own page: its topic, booklet pages, reading sheets, a booth idea wheel, a review game, and a proposal form. Proposals and review-game scores save online, and the teacher watches every group's progress live, approves proposals, or sends them back with a note.

It runs on Firebase (free Spark plan): Authentication for the logins, Firestore for saving, Hosting for the site. The topic content is still one file, `data.js`, exactly like before.

## Files

- `index.html`: the whole site (layout, styles, and code)
- `data.js`: all the content – topics, booklet pages, readings, wheel ideas, quiz questions, deadlines. **All normal content updates happen here.**
- `firebase-config.js`: the project's public web config (not a secret)
- `firestore.rules`: who may read and write what
- `admin/`: scripts to make logins, reset a group's code, and clean up after the expo
- `test/`: automated tests for the security rules

## Logins

- **Groups** type one code (topic label plus one digit, any case). The code IS the login – there is no separate password. Codes are made by `admin/create-groups.js`, never written in this repo, and no student names are stored anywhere. The teacher keeps the code-to-name list offline. These chosen codes are predictable: anyone who guesses a code can access that group. The public password expansion only meets Firebase length requirements; it adds no secrecy.
- **Teacher** taps "Teacher sign in" on the login screen and uses email + password, made by `admin/create-teacher.js`.

## First-time Firebase setup (once)

1. Create the project in the Firebase console under the school Google account, free Spark plan.
2. **Authentication:** enable the Email/Password provider. In Authentication → Settings → User actions, turn **off** "Enable create (sign-up)" so only the admin scripts can make accounts.
3. **Firestore:** create the database in production mode, in a US location.
4. **Hosting:** add a web app, copy its config into `firebase-config.js`, and connect Hosting to this GitHub repo so merges to `main` deploy and pull requests get preview channels.
5. Put the project id in `.firebaserc`, put the teacher UID (printed by `admin/create-teacher.js`) in `firestore.rules` in place of `TEACHER_UID`, and deploy the rules: `firebase deploy --only firestore:rules`.

## Before the expo: make the groups

In the `admin/` folder:

```sh
npm install
# save the service account key from the Firebase console as admin/serviceAccount.json
cp groups.example.json groups.json   # then fill in one line per group: code, topic and optional grade
node create-groups.js                # creates the logins, prints a code sheet to copy names onto
node create-teacher.js you@baderhillel.org /private/path/to/password.txt
```

`groups.json`, `serviceAccount.json`, and the printed code sheet are all in `.gitignore`. Never commit them.

## During the expo

- A group lost its code or shared it around: `node admin/reset-password.js <old code>` – the group gets a fresh code and keeps its work; the old code stops working.

## After the expo

```sh
node admin/export-and-cleanup.js         # exports everything to a CSV, deletes nothing
node admin/export-and-cleanup.js --yes   # then deletes all group logins and data
```

## Editing content (data.js)

Same as before. Reading sheets: edit each topic's `reading` and `extra` paragraphs or links. Deadlines: edit `deadlines`; `proposalDeadline` is the position of the proposal due date in that list, counting from 0. Every merge to `main` deploys automatically.

## Hosting build

Run `node build-hosting.mjs` before deploying. Only four website files are copied to `public/`; admin data, logs, and repository metadata are never hosted. GitHub Actions runs this build automatically.

## Testing changes

Work on a branch and open a pull request – Firebase gives the PR its own preview link, and `main` stays live until the PR is merged.

The security rules have automated tests (needs Java for the emulator):

```sh
npx firebase-tools emulators:start --only firestore --project demo-expo
cd test && npm install && npm test
```

## Good to know

- The site works on phones, Chromebooks, and laptops, in light and dark mode, and keeps working through shaky school Wi-Fi (offline cache).
- Firestore stores group codes, assigned topics and grades, proposals, teacher notes, and quiz scores. Authentication stores generated group login identifiers and the teacher login. No student names are stored.

## Hebrew reading practice

`reading.html` is open without a group login. It has a stopwatch and tap-to-mark word practice. The three blessings, Hanerot Halalu and V'al Hanissim have separate Chabad.org and Alevsky booklet options, with pointed Hebrew and links to their sources. The booklet's printed parentheses are retained, not combined with the Chabad.org text. Text lives in `reading-texts.mjs`.

Solo practice is held in the current page only and is lost on refresh. A partner session shares only a passage id, marked word indexes and timer state. Its 128-bit random code is a bearer secret: anyone with it may read/change the session. Sessions cannot be listed. They expire after at most two hours and can be explicitly closed/deleted from either screen. Expired records are inaccessible but may remain stored until manually cleaned up. Open room creation uses the project's Spark quota; no paid functions or scheduled cleanup are configured. Group rules and data are separate.

Run `node test/reading-rules.test.js` with the Firestore emulator to test room access, expiry, field limits and group isolation.
