import { STATUS } from '../constants/constants';
import { status, statusElement } from './setup';

export const updateStatus = (newStatus = STATUS.PLAYING) => {
  status = newStatus;
  switch (status) {
    case STATUS.INITIAL:
      statusElement.textContent = 'SNAKE!';
      break;
    case STATUS.PLAYING:
      statusElement.textContent = 'PLAYING SNAKE!';
      break;
    case STATUS.OVER:
      statusElement.textContent = 'GAME OVER!';
      break;
    default:
      break;
  }
};
