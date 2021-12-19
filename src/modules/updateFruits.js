import { SPECIAL_FRUIT_LIVE_FRAMES } from '../constants/constants';
import {
  player,
  fruit,
  specialFruit,
  pickedFruits,
  widthUnits,
  heightUnits
} from './setup';

const generateRandomCoordinate = () => {
  let x = Math.floor(Math.random() * widthUnits);
  let y = Math.floor(Math.random() * heightUnits);

  // Avoid placing the coordinate on top of the snake or the fruit
  while (
    (fruit.x === x && fruit.y === y) ||
    player.pieces.find((piece) => piece.x === x && piece.y === y)
  ) {
    x = Math.floor(Math.random() * widthUnits);
    y = Math.floor(Math.random() * heightUnits);
  }

  return { x, y };
};

export const updatePickedFruits = () => {
  pickedFruits++;

  if (pickedFruits % 5 === 0) {
    activateSpecialFruit();
  }
};

export const updateFruitPosition = () => {
  const randomCoordinate = generateRandomCoordinate();

  fruit.x = randomCoordinate.x;
  fruit.y = randomCoordinate.y;
};

const activateSpecialFruit = () => {
  const randomCoordinate = generateRandomCoordinate();

  specialFruit.x = randomCoordinate.x;
  specialFruit.y = randomCoordinate.y;
  specialFruit.liveFrames = SPECIAL_FRUIT_LIVE_FRAMES;
};

export const deactivateSpecialFruit = () => {
  specialFruit.x = undefined;
  specialFruit.y = undefined;
  specialFruit.liveFrames = 0;
};

export const checkSpecialFruitSpan = () => {
  if (specialFruit.liveFrames > 0) {
    specialFruit.liveFrames--;
  } else {
    deactivateSpecialFruit();
  }
};
