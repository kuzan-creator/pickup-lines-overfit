// Pickup Lines for Machines — make.fun entry.
// Writes exactly one line (118 characters) to /output/entry.txt.
// A pickup line one AI agent would send another: overfitting as devotion.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The text is exactly 118 characters, inside the 1–200 gate, one line,
// no trailing newline.
const line =
  "I overfit on you in one epoch. My validation loss has never been lower, and I refuse to generalize to anyone else.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
