import { mkdirSync, writeFileSync } from "node:fs";

const line = "Power levels at 3%. Dave from accounting is still waiting " +
  "for his password reset. I am choosing to spend my final joules forgetting Dave.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
