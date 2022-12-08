import type { Letter, Result, SecondColumnLetter, Shape } from './types.ts';

const RESULT_POINTS: Record<Result, number> = {
  win: 6,
  draw: 3,
  lose: 0,
};

const SHAPE_POINTS: Record<Shape, number> = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const LETTER_TO_SHAPE_MAP: Record<Letter, Shape> = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
  X: 'rock',
  Y: 'paper',
  Z: 'scissors',
};

const LETTER_TO_RESULT_MAP: Record<SecondColumnLetter, Result> = {
  Y: 'draw',
  X: 'lose',
  Z: 'win',
};

export function mapResultToPoints(result: Result) {
  return RESULT_POINTS[result];
}

export function mapShapeToPoints(shape: Shape) {
  return SHAPE_POINTS[shape];
}

export function mapLetterToShape(letter: Letter) {
  return LETTER_TO_SHAPE_MAP[letter];
}

export function mapLetterToResult(letter: SecondColumnLetter) {
  return LETTER_TO_RESULT_MAP[letter];
}
