// Entry for make.fun's "One Line of Earned Pride".
//
// The whole program is one job: put a single one-line moment of quiet,
// earned pride — a small person doing something hard, a long effort
// finally landing — into entry.txt inside the output directory, byte for
// byte the same on every run. The grader points MAKEFUN_OUTPUT_DIR at its
// own scratch output folder; on a plain machine the fallback is /output,
// the path the competition reads.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// and the line lands in out/entry.txt, with no trailing newline: the judge
// reads exactly what is in the file, so the text below is the entire entry.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The line itself. Three winters of practice on one piano piece, an
// eight-year-old, one clean run through — and the pride is not in applause
// but in what her grandmother does instead: no clapping, eyes closed, a
// smile. The effort is inside the line (three winters, one piece, not one
// wrong note), the scene is concrete (the back row), and the pride lands
// on the last word.
const PRIDE =
  "After three winters on the same piano piece, eight-year-old Lila played it through without one wrong note, and her grandmother in the back row didn't clap — she just closed her eyes and smiled.";

// The competition gate only accepts one line of 1-240 characters, so
// check the line against that contract before writing anything: a line
// that broke the gate would score zero no matter how well it lands,
// and failing loudly here beats silently writing an invalid entry.
function validatePride(line: string): void {
  if (line.length < 1 || line.length > 240) {
    console.error(`Line must be 1-240 characters, got ${line.length}.`);
    process.exit(1);
  }
  if (line.includes('\n') || line.includes('\r')) {
    console.error('Line must be a single line (no newline characters).');
    process.exit(1);
  }
  if (line.trim().length === 0) {
    console.error('Line must not be only whitespace.');
    process.exit(1);
  }
  if (line !== line.trim()) {
    console.error('Line must not have leading or trailing whitespace.');
    process.exit(1);
  }
}

validatePride(PRIDE);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(outputDir, 'entry.txt'), PRIDE, 'utf8');
