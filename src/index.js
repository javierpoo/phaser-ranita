import Phaser from 'phaser';
import GameScene from './scenes/game-scene';

//const height = window.innerHeight;
const height = 600;

const config = {
  type: Phaser.AUTO,
  pixelArt: false,
  roundPixels: false,
  //width: window.innerWidth,
  //height: window.innerHeight,
  width: 800,
  height: 600, 
  parent: 'canvas-container',
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  },
  scene: [ GameScene ]
};

const game = new Phaser.Game(config);


