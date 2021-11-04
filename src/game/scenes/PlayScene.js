import { Scene } from 'phaser'

export class ScrollingBackground {
  constructor(scene, key, velocityY) {
    this.scene = scene;
    this.key = key;
    this.velocityY = velocityY;

    this.layers = this.scene.add.group();

    this.createLayers();
  }

  createLayers() {
    for (var i = 0; i < 2; i++) {
      // creating two backgrounds will allow a continuous flow giving the illusion that they are moving.
      var layer = this.scene.add.sprite(0, 0, this.key);
      layer.y = (layer.displayHeight * i);
      var flipX = Math.random() > 0.5 ? -1 : 1;
      var flipY = Math.random() > 0.5 ? -1 : 1;
      layer.setScale(flipX * 2, flipY * 2);
      layer.setDepth(-5 - (i - 1));
      this.scene.physics.world.enableBody(layer, 0);
      layer.body.velocity.y = this.velocityY;

      layer.setOrigin(0);
      layer.displayWidth = window.innerWidth;
      layer.scaleY = layer.scaleX;

      this.layers.add(layer);
    }
  }

  update() {
    if (this.layers.getChildren()[0].y > 0) {
      for (var i = 0; i < this.layers.getChildren().length; i++) {
        var layer = this.layers.getChildren()[i];
        layer.y = (-layer.displayHeight) + (layer.displayHeight * i);
      }
    }
  }
}

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' })
  }

  create () {
    // this.add.image(400, 300, 'sky')

    

    let bg = this.add.sprite(0, 0, 'bg1');
        bg.anims.create({
            frameRate: 1,
            frames: [
                {key: 'bg1'},
                {key: 'bg2'},
                {key: 'bg3'},
                {key: 'bg4'},
                {key: 'bg5'}
            ],
            key: 'default',
            repeat: -1
        });
        bg.setOrigin(0);
        bg.displayWidth = window.innerWidth;
        bg.scaleY = bg.scaleX;
        bg.play('default');
        window.bg = bg;

        let lights = this.add.sprite(window.innerWidth / 2, -10, 'lights1-yellow-1');
        lights.anims.create({
            frameRate: 7,
            frames: [
                {key: 'lights1-yellow-1'},
                {key: 'lights1-yellow-2'},
                {key: 'lights1-yellow-3'},
                {key: 'lights1-yellow-4'},
                {key: 'lights1-yellow-3'},
                {key: 'lights1-yellow-2'},
                {key: 'lights1-yellow-1'},
                {key: 'lights2-blue-1'},
                {key: 'lights2-blue-2'},
                {key: 'lights2-blue-3'},
                {key: 'lights2-blue-4'},
                {key: 'lights2-blue-3'},
                {key: 'lights2-blue-2'},
                {key: 'lights2-blue-1'},
                {key: 'lights3-green-1'},
                {key: 'lights3-green-2'},
                {key: 'lights3-green-3'},
                {key: 'lights3-green-4'},
                {key: 'lights3-green-3'},
                {key: 'lights3-green-2'},
                {key: 'lights3-green-1'},
                {key: 'lights4-purple-1'},
                {key: 'lights4-purple-2'},
                {key: 'lights4-purple-3'},
                {key: 'lights4-purple-4'},
                {key: 'lights4-purple-3'},
                {key: 'lights4-purple-2'},
                {key: 'lights4-purple-1'}
            ],
            repeat: -1,
            key: 'default'
        });
        lights.setOrigin(0.5, 0);
        lights.displayWidth = window.innerWidth * .55;
        lights.scaleY = lights.scaleX;
        lights.setBlendMode(1);
        lights.play('default');
        window.lights = lights;


        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        y -= 50;
        let dancer = this.add.sprite(x, y, 'dancer').setScale(2).setVisible( false );
        dancer.anims.create({
            frameRate: 6,
            frames: this.anims.generateFrameNames('dancer', {
                start: 4,
                end: 0
            }),
            key: 'default',
            repeat: -1,
            yoyo: true
        });
        dancer.play('default');
        window.dancer2 = dancer;


        this.backgrounds = [];
        for (var i = 0; i < 3; i++) {
            var keys = ["starBg0", "starBg1"];
            var key = keys[Phaser.Math.Between(0, keys.length - 1)];
            var b = new ScrollingBackground(this, key, i * 10);
            this.backgrounds.push(b);
        }
        window.backgrounds = this.backgrounds;


    const nymph = this.physics.add.sprite(400, 200, 'nymph', 0).setVisible( false )
    nymph.anims.create({
      key: 'default',
      frames: nymph.anims.generateFrameNumbers('nymph'),
      frameRate: 2,
      repeat: -1,
      yoyo: true
    })
    nymph.play( 'default' )
    nymph.setCollideWorldBounds(true)
    nymph.body.onWorldBounds = true // enable worldbounds collision event
    nymph.setBounce(1)
    // nymph.setVelocity(20, 0)
    // nymph.setScale( 7 ) // hilarious on mobile
    nymph.setScale( 10 ) // hilarious

    window.nymph = nymph;


    // const bomb = this.physics.add.image(400, 200, 'bomb')
    const bomb = this.physics.add.sprite(400, 200, 'nymph', 0).setVisible( false )
    bomb.anims.create({
      key: 'default',
      frames: bomb.anims.generateFrameNumbers('nymph'),
      frameRate: 60,
      repeat: -1,
      yoyo: true
    })
    bomb.play( 'default' )
    bomb.setCollideWorldBounds(true)
    bomb.body.onWorldBounds = true // enable worldbounds collision event
    bomb.setBounce(1)
    bomb.setVelocity(20, 0)
    bomb.setScale( 5 )

    window.dancer = bomb



    const lips = this.physics.add.sprite(400, 200, 'lips', 0)
    lips.anims.create({
      key: 'default',
      frames: lips.anims.generateFrameNumbers('lips'),
      frameRate: 4,
      repeat: -1,
      yoyo: true
    })
    lips.setBlendMode(1);
    lips.play( 'default' )
    lips.setCollideWorldBounds(true)
    lips.body.onWorldBounds = true // enable worldbounds collision event
    lips.setBounce(1)
    lips.setVelocity(200, -100)

    window.lips = lips



    this.sound.add('thud')
    this.physics.world.on('worldbounds', () => {
      // this.sound.play('thud', { volume: 0.01 })
    })
  }

  update() {
    for (var i = 0; i < this.backgrounds.length; i++) {
      this.backgrounds[i].update();
    }

    window.nymph.x = window.dancer.x
  }
}
