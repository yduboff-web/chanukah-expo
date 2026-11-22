# Chanukah Expo site

A static site for the 5th and 6th grade Chanukah Expo. Each group types a code and gets its own page: its topic, booklet pages, reading sheets, a booth idea wheel, a review game, a proposal form it can print, and the deadlines.

There is no server and nothing to install. It is two files:

- `index.html`: the whole site (layout, styles, and code)
- `data.js`: everything the site shows (groups, codes, topics, readings, quiz questions, dates)

**All normal updates happen in `data.js`.** `index.html` only changes if the design or features change.

## Put it online with GitHub Pages

1. Create a new GitHub repository called `chanukah-expo`. It must be **public** for GitHub Pages on a free account.
2. Put `index.html`, `data.js`, and this `README.md` in the root of the `main` branch.
3. In the repository, go to **Settings → Pages**. Under **Source**, choose **Deploy from a branch**, pick **main** and **/ (root)**, and save.
4. After a minute or two, the site is live at `https://<github-username>.github.io/chanukah-expo/`.

Suggested workflow for changes: make edits on a branch called `edits`, check them, then merge into `main`. Every merge to `main` updates the live site automatically.

## Codes for testing

- `DEMO5` and `DEMO6`: sample groups
- `RD5787`: teacher view (all groups, plus a preview of any topic)

Codes are not case-sensitive.

## After the matching: add the real groups

In `data.js`, replace the two DEMO groups in `groups` with one line per group:

```js
{ code: "OLIVE7", grade: 5, members: ["Moshe", "Dovid"], topic: 2 },
```

- `code`: short and easy to type. Don't build it from the students' names.
- `members`: **first names only**. The site is public.
- `topic`: the topic number, 1–18.

Change `teacherCode` too, before the site goes live.

## Add a reading sheet or an extra reading

Each topic in `data.js` has `reading` and `extra`, both `null` until they're ready. Either one can be:

- a list of paragraphs: `reading: ["First paragraph.", "Second paragraph."]`
- or a link: `reading: "https://…"`

`reading` shows as **Reading sheet**. `extra` shows as **More to read**, and only appears once it's filled in.

## Change dates

Edit `deadlines` in `data.js`. Dates are written `"2026-11-30"`. Leave a date as `""` to show "Date coming". `proposalDeadline` is the position of the proposal due date in that list, counting from 0.

## Good to know

- Proposals save in each student's browser as they type. They hand them in by printing; nothing is sent anywhere.
- Codes are not real passwords. Anyone who opens the page source can see them. Keep everything on the site non-private.
- The site works on phones, Chromebooks, and laptops, in light and dark mode.
