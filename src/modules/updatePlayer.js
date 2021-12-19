import { DIRECTIONS } from '../constants/constants';
import { candidateDirections, player } from './setup';

export const growSnake = () => {
  player.pieces.push({
    ...player.pieces[player.pieces.length - 1]
  });
};

const updatePlayerDirection = () => {
  const validDirection = candidateDirections[0];
  if (validDirection) {
    player.headDirection = validDirection;
  }

  // Clear candidates
  candidateDirections.length = 0;
};

export const updatePlayerPosition = () => {
  updatePlayerDirection();

  let prevPiece = {
    ...player.pieces[0]
  };

  player.pieces.forEach((piece, index) => {
    // The head makes the next move
    if (index === 0) {
      switch (player.headDirection) {
        case DIRECTIONS.UP:
          piece.y--;
          break;
        case DIRECTIONS.LEFT:
          piece.x--;
          break;
        case DIRECTIONS.DOWN:
          piece.y++;
          break;
        case DIRECTIONS.RIGHT:
          piece.x++;
          break;
        default:
          break;
      }
    } else {
      // Each of the remaining pieces updates its position to where the previous piece was
      const nextPiece = { ...piece };

      piece.x = prevPiece.x;
      piece.y = prevPiece.y;

      prevPiece = { ...nextPiece };
    }
  });
};
