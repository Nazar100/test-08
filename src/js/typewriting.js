import Typewriter from 'typewriter-effect/dist/core';
let x = 0;

new Typewriter('#typewriter', {
  strings: ['Hello World'],
  autoStart: true,
  loop: false,
  deleteSpeed: 500,
});
