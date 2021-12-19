import {
  COLLISIONS,
  STATUS,
  INTERVAL_MS,
  SCORE_RATES
} from './constants/constants';
import { addKeyListener } from './modules/keyListeners';
import { collisionCheck } from './modules/collision';
import { updatePlayerPosition, growSnake } from './modules/updatePlayer';
import {
  updateFruitPosition,
  updatePickedFruits,
  checkSpecialFruitSpan,
  deactivateSpecialFruit
} from './modules/updateFruits';
import { updateScore } from './modules/updateScore';
import { updateStatus } from './modules/updateStatus';
import { draw } from './modules/draw';

addKeyListener();
updateStatus();
updateScore();
updateFruitPosition();

const gameOver = () => {
  updateStatus(STATUS.OVER);
  clearInterval(interval);
};

const interval = setInterval(() => {
  updatePlayerPosition();
  checkSpecialFruitSpan();
  const collisionType = collisionCheck();

  switch (collisionType) {
    case COLLISIONS.ARENA:
      return gameOver();
    case COLLISIONS.SELF:
      return gameOver();
    case COLLISIONS.FRUIT:
      updatePickedFruits();
      growSnake();
      updateFruitPosition();
      updateScore(SCORE_RATES.FRUIT);
      break;
    case COLLISIONS.SPECIAL_FRUIT:
      growSnake();
      deactivateSpecialFruit();
      updateScore(SCORE_RATES.SPECIAL_FRUIT);
      break;
    default:
      break;
  }

  draw();
}, INTERVAL_MS);
