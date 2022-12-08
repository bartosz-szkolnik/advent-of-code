import { sum } from '../../utils/math.ts';
import { readFile } from '../../utils/read-file.ts';
import { calculateResult, figureOutWhatToPlay } from './functions.ts';
import { mapLetterToShape, mapResultToPoints, mapShapeToPoints, mapLetterToResult } from './mappers.ts';
import type { FirstColumnLetter, SecondColumnLetter } from './types.ts';

const { decoded } = await readFile('./src/2022/day-2/data.txt');
const rounds = decoded.split('\n').map(round => round.split(' ') as [FirstColumnLetter, SecondColumnLetter]); // Is there a better way than type assertion?

// Part 1
const result = rounds
  .map(([enemy, me]) => ({ enemy: mapLetterToShape(enemy), me: mapLetterToShape(me) }))
  .map(({ enemy, me }) => ({ result: calculateResult(enemy, me), shape: me }))
  .map(({ result, shape }) => mapResultToPoints(result) + mapShapeToPoints(shape))
  .reduce(sum);
console.log(result);
////////

// Part 2
const result2 = rounds
  .map(([enemy, result]) => ({ enemy: mapLetterToShape(enemy), result: mapLetterToResult(result) }))
  .map(({ enemy, result }) => ({ shape: figureOutWhatToPlay(enemy, result), result }))
  .map(({ shape, result }) => mapShapeToPoints(shape) + mapResultToPoints(result))
  .reduce(sum);
console.log(result2);
////////
