import {
  SCALE,
  STATUS,
  DIRECTIONS,
  WALL_BEHAVIOR,
  STARTING_BODY_PIECES
} from '../constants/constants';

const canvas = document.getElementById('canvas');
export const context = canvas.getContext('2d');
context.scale(SCALE, SCALE);

export const widthUnits = canvas.width / SCALE;
export const heightUnits = canvas.height / SCALE;

export const wallBehavior = WALL_BEHAVIOR.NOT_SOLID;

export let status = STATUS.PLAYING;
export const statusElement = document.getElementById('status');

export let score = 0;
export const scoreElement = document.getElementById('score');

export const player = {
  headDirection: DIRECTIONS.RIGHT,
  pieces: []
};

export const candidateDirections = [];

export let pickedFruits = 0;

export const fruit = {
  x: undefined,
  y: undefined
};

export const specialFruit = {
  x: undefined,
  y: undefined,
  liveFrames: 0
};

// Assemble starting snake body
(() => {
  let insertedBodyPieces = 0;
  const head = {
    x: parseInt(widthUnits / 2),
    y: parseInt(heightUnits / 2)
  };

  player.pieces.push(head);

  while (insertedBodyPieces < STARTING_BODY_PIECES) {
    insertedBodyPieces++;
    player.pieces.push({
      x: head.x - insertedBodyPieces,
      y: head.y
    });
  }
})();
