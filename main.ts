// One Sentence for a Traveler from 1800 — entry program.
// Writes one sentence explaining the modern internet to a time
// traveler from 1800, using only things a person from that year
// already knows: a library, a post office, a town square.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "It is a library where every book writes back, a post office that delivers letters in a blink, and a town square where the whole world argues at once.";

function outputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  if (dir !== undefined && dir.length > 0) return dir;
  return "output";
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), SENTENCE, "utf8");
}

main();
