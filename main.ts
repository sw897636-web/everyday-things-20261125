// Everyday Things, Two Lines — make.fun bounty entry
// Writes two lines (<=400 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: same bytes on every run. Node 22, stdlib only.
//
// Line 1 explains a traffic jam to a 10-year-old with one vivid analogy.
// Line 2 says why the analogy works: what it maps and what it leaves out.

// v2 (revised): "tipped on its side" -> "upside-down": ketchup only drips
// out of the neck when the bottle is upside-down; on its side it just
// pools. "melt away" -> "clear by itself": plainer, no second image.
const ENTRY =
  "A traffic jam is an upside-down ketchup bottle: hundreds of cars squeeze toward the tiny neck, and only a thin line can drip out at a time.\n" +
  "It maps how a narrow neck turns a crowd into a slow trickle, but it leaves out that drivers pick their own speed and lane while ketchup only gets pushed, and that a jam can clear by itself without anyone squeezing the bottle.\n";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const { mkdirSync, writeFileSync } = require("node:fs");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
}

main();
