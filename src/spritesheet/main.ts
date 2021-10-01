import * as ex from 'excalibur';
import { vec } from 'excalibur';

import kennyCardsImageSrc from './kenny-cards.png';

const game = new ex.Engine({
    width: 600,
    height: 400,
    displayMode: ex.DisplayMode.FitScreen
});

// start-snippet{spritesheet}
const kennyCardsImage = new ex.ImageSource(kennyCardsImageSrc);

const spriteSheet = ex.SpriteSheet.fromImageSource({
    image: kennyCardsImage,
    grid: {
        rows: 4,
        columns: 14,
        spriteWidth: 42,
        spriteHeight: 60
    },
    spacing: {
        // Optionally specify the offset from the top left of sheet to start parsing
        originOffset: { x: 11, y: 2 },
        // Optionally specify the margin between each sprite
        margin: { x: 23, y: 5}
    }
});
// end-snippet{spritesheet}
const animation = new ex.Animation({
    frames: spriteSheet.sprites.map(s => ({ graphic: s, duration: 300})),
    strategy: ex.AnimationStrategy.PingPong
});

const animation2 = ex.Animation.fromSpriteSheet(
    spriteSheet,
    ex.Util.range(0, spriteSheet.sprites.length-1),
    300,
    ex.AnimationStrategy.PingPong
);

const actor = new ex.Actor({
    pos: ex.vec(game.halfDrawWidth, game.halfDrawHeight)
});
actor.graphics.show(animation, {
    offset: vec(-50,0),
});
actor.graphics.show(animation2, {
    offset: vec(50, 0)
});

console.log(game.currentScene.camera.pos);
const loader = new ex.Loader([kennyCardsImage]);
game.start(loader).then(() => {
    game.currentScene.camera.zoom = 2;
    game.currentScene.camera.pos = ex.vec(game.halfDrawWidth, game.halfDrawHeight);
    console.log(game.currentScene.camera.pos);
    game.currentScene.add(actor);
});