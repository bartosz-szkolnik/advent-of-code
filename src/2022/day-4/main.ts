import { range } from '../../utils/math.ts';
import { readFile } from '../../utils/read-file.ts';

const { decoded } = await readFile('./src/2022/day-4/data.txt');

// Part 1
const result = decoded
  .split('\n')
  .map(line => line.split(','))
  .filter(([a, b]) => {
    const [minA, maxA] = a.split('-').map(Number);
    const [minB, maxB] = b.split('-').map(Number);

    return (minB >= minA && maxB <= maxA) || (minB <= minA && maxB >= maxA);
  }).length;

console.log(result);
////////

// Part 2
const result2 = decoded
  .split('\n')
  .map(line => line.split(','))
  .filter(([a, b]) => {
    const [minA, maxA] = a.split('-').map(Number);
    const [minB, maxB] = b.split('-').map(Number);

    const rangeB = range(minB, maxB);
    return range(minA, maxA).some(n => rangeB.includes(n));
  }).length;

console.log(result2);
////////
