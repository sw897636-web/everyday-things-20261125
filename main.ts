// Everyday Things, Two Lines — make.fun bounty entry
// Writes two lines (<=400 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: same bytes on every run. Node 22, stdlib only.
//
// Line 1 explains a traffic jam to a 10-year-old with one vivid analogy.
// Line 2 says why the analogy works: what it maps and what it leaves out.

// v3 (Quick Smart review): lunch line after a dropped tray replaces the
// ketchup-bottle draft: a jam is a stop that travels backward, each driver
// braking a little later and harder than the one ahead.
const ENTRY =
  "A traffic jam is the lunch line after one kid drops his tray: he stops for two seconds, everyone behind him bumps to a halt, and kids way at the back are still stuck long after he's sat down.\n" +
  "It works because a jam isn't a pile of cars, it's a stop that travels backward: each driver brakes a little later and harder than the one ahead, so the wave outlives whatever started it.\n";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const { mkdirSync, writeFileSync } = require("node:fs");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
}

main();
