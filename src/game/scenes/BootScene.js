import { Scene } from 'phaser'
import sky from '@/game/assets/sky.png'
import bomb from '@/game/assets/bomb.png'
import nymph from '@/game/assets/nymph.png'
import thudMp3 from '@/game/assets/thud.mp3'
import thudOgg from '@/game/assets/thud.ogg'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('sky', sky)
    this.load.image('bomb', bomb)
    this.load.spritesheet(
      'nymph',
      nymph,
      {
        frameWidth: 66,
        frameHeight: 109
      }
    )
    this.load.audio('thud', [thudMp3, thudOgg])

    this.load.spritesheet(
      'dancer',
      require('../assets/hostage-girl-back.png'),
      {
          frameWidth: 30,
          frameHeight: 61
      }
  ),
  this.load.image(
      'starBg0', 
      require('../assets/star-bg-0.png')
  ),
  this.load.image(
      'starBg1', 
      require('../assets/star-bg-1.png')
  )
  this.load.image(
      'laser1', 
      require('../assets/lasers-bg1.png')
  );
  this.load.image(
      'laser2', 
      require('../assets/lasers-bg2.png')
  );
  this.load.image(
      'laser3', 
      require('../assets/lasers-bg3.png')
  );
  this.load.image(
      'laser4', 
      require('../assets/lasers-bg4.png')
  );
  this.load.image(
      'bg1', 
      require('../assets/bg-1.png')
  );
  this.load.image(
      'bg2', 
      require('../assets/bg-2.png')
  );
  this.load.image(
      'bg3', 
      require('../assets/bg-3.png')
  );
  this.load.image(
      'bg4', 
      require('../assets/bg-4.png')
  );
  this.load.image(
      'bg5', 
      require('../assets/bg-5.png')
  );

  this.load.image(
      'lights1-yellow-1', 
      require('../assets/lights1-yellow-1.png')
  );
  this.load.image(
      'lights1-yellow-2', 
      require('../assets/lights1-yellow-2.png')
  );
  this.load.image(
      'lights1-yellow-3', 
      require('../assets/lights1-yellow-3.png')
  );
  this.load.image(
      'lights1-yellow-4', 
      require('../assets/lights1-yellow-4.png')
  );
  this.load.image(
      'lights2-blue-1', 
      require('../assets/lights2-blue-1.png')
  );
  this.load.image(
      'lights2-blue-2', 
      require('../assets/lights2-blue-2.png')
  );
  this.load.image(
      'lights2-blue-3', 
      require('../assets/lights2-blue-3.png')
  );
  this.load.image(
      'lights2-blue-4', 
      require('../assets/lights2-blue-4.png')
  );
  this.load.image(
      'lights3-green-1', 
      require('../assets/lights3-green-1.png')
  );
  this.load.image(
      'lights3-green-2', 
      require('../assets/lights3-green-2.png')
  );
  this.load.image(
      'lights3-green-3', 
      require('../assets/lights3-green-3.png')
  );
  this.load.image(
      'lights3-green-4', 
      require('../assets/lights3-green-4.png')
  );
  this.load.image(
      'lights4-purple-1', 
      require('../assets/lights4-purple-1.png')
  );
  this.load.image(
      'lights4-purple-2', 
      require('../assets/lights4-purple-2.png')
  );
  this.load.image(
      'lights4-purple-3', 
      require('../assets/lights4-purple-3.png')
  );
  this.load.image(
      'lights4-purple-4', 
      require('../assets/lights4-purple-4.png')
  );
  }

  create () {
    this.scene.start('PlayScene')
  }
}
