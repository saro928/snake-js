import { DIRECTIONS } from '../constants/constants';
import { player, candidateDirections } from './setup';

export const addKeyListener = () => {
  document.addEventListener('keydown', (event) => {
    // Push candidate directions to an array between frames and the first one will be selected (this is to avoid assignment of an opposite direction if the last pressed key between 2 frames turned out to be the opposite direction of the last one)
    switch (event.key) {
      case 'ArrowUp':
        if (player.headDirection !== DIRECTIONS.DOWN) {
          candidateDirections.push(DIRECTIONS.UP);
        }
        break;
      case 'ArrowLeft':
        if (player.headDirection !== DIRECTIONS.RIGHT) {
          candidateDirections.push(DIRECTIONS.LEFT);
        }
        break;
      case 'ArrowDown':
        if (player.headDirection !== DIRECTIONS.UP) {
          candidateDirections.push(DIRECTIONS.DOWN);
        }
        break;
      case 'ArrowRight':
        if (player.headDirection !== DIRECTIONS.LEFT) {
          candidateDirections.push(DIRECTIONS.RIGHT);
        }
        break;
      default:
        break;
    }
  });
};
