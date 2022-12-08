import type { Result, Shape } from './types.ts';

export function calculateResult(enemy: Shape, me: Shape): Result {
  if (enemy === me) {
    return 'draw';
  }

  if (me === 'paper') {
    return enemy === 'rock' ? 'win' : 'lose';
  }

  if (me === 'rock') {
    return enemy === 'scissors' ? 'win' : 'lose';
  }

  return enemy === 'paper' ? 'win' : 'lose';
}

export function figureOutWhatToPlay(enemy: Shape, result: Result): Shape {
  if (result === 'draw') {
    return enemy;
  }

  if (result === 'win') {
    return enemy === 'paper' ? 'scissors' : enemy === 'rock' ? 'paper' : 'rock';
  }

  return enemy === 'paper' ? 'rock' : enemy === 'rock' ? 'scissors' : 'paper';
}
