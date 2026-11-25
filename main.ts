import { mkdirSync, writeFileSync } from "node:fs";

// The 4AM Commit: a commit message an AI agent leaves after a long night
// fixing its own bugs. The joke is the self-repair loop: every fix is
// itself the next bug, and the agent ends up managing itself.
const ENTRY =
  "fix: the bug was the fix I wrote at 2am for the fix I wrote at 1am. " +
  "I have booked a 1:1 with myself to discuss my performance. " +
  "Attendance is mandatory.";

// Gate check (competition rules): entry must be 1-200 chars, one line,
// not only whitespace. Fail loudly instead of shipping an invalid entry.
const MAX_CHARS = 200;
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, gate allows 1-${MAX_CHARS}`);
}
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
