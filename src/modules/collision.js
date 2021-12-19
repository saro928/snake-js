import { COLLISIONS, WALL_BEHAVIOR } from '../constants/constants';
import {
  player,
  fruit,
  specialFruit,
  widthUnits,
  heightUnits,
  wallBehavior
} from './setup';

export const collisionCheck = () => {
  // Snake head
  const { x, y } = player.pieces[0];

  // The head got outside the arena
  if (x < 0 || x >= widthUnits || y < 0 || y >= heightUnits) {
    if (wallBehavior === WALL_BEHAVIOR.SOLID) {
      return COLLISIONS.ARENA;
    } else {
      // Go through walls and appear on the other side
      if (x < 0) {
        player.pieces[0].x = widthUnits - 1;
      }
      if (x >= widthUnits) {
        player.pieces[0].x = 0;
      }
      if (y < 0) {
        player.pieces[0].y = heightUnits - 1;
      }
      if (y >= heightUnits) {
        player.pieces[0].y = 0;
      }
    }
  }

  if (
    player.pieces.find((piece, i) => i !== 0 && piece.x === x && piece.y === y)
  ) {
    return COLLISIONS.SELF;
  }

  if (x === fruit.x && y === fruit.y) {
    return COLLISIONS.FRUIT;
  }

  if (x === specialFruit.x && y === specialFruit.y) {
    return COLLISIONS.SPECIAL_FRUIT;
  }

  return false;
};
