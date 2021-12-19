import { score, scoreElement } from './setup';

export const updateScore = (amount = 0) => {
  score += amount;
  scoreElement.textContent = `Score: ${score}`;
};
