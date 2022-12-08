import { sum } from '../../utils/math.ts';
import { readFile } from '../../utils/read-file.ts';

const { decoded } = await readFile('./src/2022/day-1/data.txt');
const calories = decoded.split('\n').reduce((prev: number[], curr) => {
  if (curr === '') {
    return [...prev, 0];
  }

  const [prevElement = 0, ...arr] = prev.reverse();
  const nextElement = prevElement + Number(curr);
  return [...arr.reverse(), nextElement];
}, []);

// Part 1
const result = calories.reduce((p, c) => Math.max(p, c));
console.log(result);
//////

// Part 2
const result2 = [...calories]
  .sort((a, b) => (a < b ? 1 : -1))
  .slice(0, 3)
  .reduce(sum);
console.log(result2);
//////
