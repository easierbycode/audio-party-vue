import Phaser from 'phaser'
import BootScene from '@/game/scenes/BootScene'
import PlayScene from '@/game/scenes/PlayScene'

function launch(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: containerId,
    physics: {
      default: 'arcade',
      arcade: {
        // gravity: { y: 30 },
        debug: false
      }
    },
    scene: [BootScene, PlayScene],
    render: {
      pixelArt: true
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    }
  })
}

export default launch
export { launch }
