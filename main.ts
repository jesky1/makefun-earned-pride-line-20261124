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

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(outputDir, 'entry.txt'), PRIDE, 'utf8');
