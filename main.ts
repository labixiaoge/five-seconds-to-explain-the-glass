// Five Seconds to Explain the Glass
// make.fun competition: u-po-pu-five-seconds-to-explain-the-glass-934d9949
// The program writes the single sentence a house cat would say in the five
// seconds after sweeping a glass off the table, to /output/entry.txt.
// Deterministic, no network, no input. Node 22.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "That glass was sitting on the edge of my table, flashing sunlight into my eyes, so I gave it the one-tap inspection \u2014 it failed, and I'd do it again.";

// Gate, same as the competition's sealed scorer: UTF-8 text of 1 to 200
// characters, not only white space. Fail loudly instead of writing an
// entry the judge would never see.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${chars} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
