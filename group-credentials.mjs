// Public, deterministic compatibility transform, NOT an extra security factor.
// The group code is the entire credential. Predictable codes are guessable.
export function normalizeCode(value) {
  const code = String(value || "").trim().toLowerCase();
  if (!/^[a-z0-9]{3,32}$/.test(code)) throw new Error("Use 3-32 letters and numbers for a group code.");
  return code;
}
export function groupPassword(value) {
  return "Expo:" + normalizeCode(value);
}
