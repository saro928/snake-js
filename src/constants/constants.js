// How many pixels per unit when drawing inside the canvas
export const SCALE = 20;

// App statuses
export const STATUS = {
  INITIAL: 'INITIAL',
  PLAYING: 'PLAYING',
  OVER: 'OVER'
};

// How much the score rises when picking fruits
export const SCORE_RATES = {
  FRUIT: 100,
  SPECIAL_FRUIT: 500
};

// Time between frames
export const INTERVAL_MS = 100;

// How many pieces besides the head
export const STARTING_BODY_PIECES = 10;

// Directions the snake head can go to
export const DIRECTIONS = {
  UP: 'UP',
  LEFT: 'LEFT',
  DOWN: 'DOWN',
  RIGHT: 'RIGHT'
};

// Things the player can collide with
export const COLLISIONS = {
  FRUIT: 'FRUIT',
  SPECIAL_FRUIT: 'SPECIAL_FRUIT',
  ARENA: 'ARENA',
  SELF: 'SELF'
};

// Die when colliding with walls or go through them
export const WALL_BEHAVIOR = {
  SOLID: 'SOLID',
  NOT_SOLID: 'NOT_SOLID'
};

// Amount of frames where the special fruit is visible
export const SPECIAL_FRUIT_LIVE_FRAMES = 20;
