import { sum } from '../../utils/math.ts';
import { readFile } from '../../utils/read-file.ts';

const { decoded } = await readFile('./src/2022/day-3/data.txt');
const letters = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Part 1
const result = decoded
  .split('\n')
  .map(line => [line.slice(0, line.length / 2), line.slice(line.length / 2)] as const)
  .map(([a, b]) => a.split('').filter(letter => b.includes(letter)))
  .flatMap(a => [...new Set(a)])
  .map(a => letters.indexOf(a))
  .reduce(sum);

console.log(result);
////////

// Part 2
const result2 = decoded
  .split('\n')
  .reduce((groups: string[][], line) => {
    const lastGroup = groups.at(-1);
    if (lastGroup?.length === 3) {
      return [...groups, [line]];
    }

    const groupsWithoutLast = groups.slice(0, -1);
    return [...groupsWithoutLast, [...(lastGroup ?? []), line]];
  }, [])
  .map(([a, b, c]) => a.split('').filter(letter => b.includes(letter) && c.includes(letter)))
  .flatMap(a => [...new Set(a)])
  .map(a => letters.indexOf(a))
  .reduce(sum);

console.log(result2);
////////
