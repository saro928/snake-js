import { SCALE } from '../constants/constants';
import {
  context,
  player,
  fruit,
  specialFruit,
  widthUnits,
  heightUnits
} from './setup';

const drawGrid = () => {
  context.lineWidth = 1 / SCALE;
  for (let i = 1; i < widthUnits; i++) {
    context.moveTo(i, 0);
    context.lineTo(i, heightUnits);
    context.stroke();
  }
  for (let i = 1; i < heightUnits; i++) {
    context.moveTo(0, i);
    context.lineTo(widthUnits, i);
    context.stroke();
  }
};

const drawPlayer = () => {
  context.fillStyle = 'black';
  player.pieces.forEach((piece, index) => {
    if (index !== 0) {
      context.fillStyle = 'red';
    }
    context.fillRect(piece.x, piece.y, 1, 1);
  });
};

export const draw = () => {
  // Clear canvas
  context.fillStyle = 'lightblue';
  context.fillRect(0, 0, widthUnits, heightUnits);

  // drawGrid();

  drawPlayer();

  // Draw fruit
  context.fillStyle = 'green';
  context.fillRect(fruit.x, fruit.y, 1, 1);

  // Draw special fruit
  if (specialFruit.liveFrames > 0) {
    context.fillStyle = 'yellow';
    context.fillRect(specialFruit.x, specialFruit.y, 1, 1);
  }
};
