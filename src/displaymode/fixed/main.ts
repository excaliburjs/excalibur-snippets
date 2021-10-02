import * as ex from 'excalibur';
import playerSrc from './player.png';
// start-snippet{displaymode.fixed}
const game = new ex.Engine({
    width: 600,
    height: 400,
    displayMode: ex.DisplayMode.Fixed // highlight-line
});
// end-snippet{displaymode.fixed}
const playerImage = new ex.ImageSource(playerSrc);
const loader = new ex.Loader([playerImage]);
game.start(loader).then(() => {
    const actor = new ex.Actor({
        pos: game.screen.center
    });
    actor.graphics.use(playerImage.toSprite());
    game.currentScene.add(actor);
});