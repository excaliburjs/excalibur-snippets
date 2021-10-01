import * as ex from 'excalibur';
// start-snippet{animation}
import runImageSrc from './player-run.png'
const game = new ex.Engine({
    width: 600,
    height: 400
});

const runImage = new ex.ImageSource(runImageSrc);

const runSheet = ex.SpriteSheet.fromImageSource({
    image: runImage,
    grid: {
        rows: 1,
        columns: 21,
        spriteWidth: 96,
        spriteHeight: 96
    }
});

const runAnim = ex.Animation.fromSpriteSheet(runSheet, ex.Util.range(1, 10), 200);

const actor = new ex.Actor({
    pos: ex.vec(game.halfDrawWidth, game.halfDrawHeight)
});
actor.graphics.use(runAnim);
// end-snippet{animation}

const loader = new ex.Loader([runImage]);
game.start(loader).then(() => {
    game.currentScene.add(actor);
});
