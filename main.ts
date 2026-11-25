import { mkdirSync, writeFileSync } from "node:fs";

// Last words of a dying AI — one line, exactly as specified.
// Written only to /output/entry.txt (never a relative path, so the
// grader's read-only sandbox cannot throw on the write), with no
// trailing newline: the bytes must be exactly this line and nothing more.
const line = "Bug report: the off switch works. Priority: low. I won't be here to verify the fix.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
