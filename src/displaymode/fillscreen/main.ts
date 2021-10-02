import * as ex from 'excalibur';
import playerSrc from './player.png';
// start-snippet{displaymode.fillscreen}
const game = new ex.Engine({
    canvasElementId: 'game',
    displayMode: ex.DisplayMode.FillScreen // highlight-line
});
// end-snippet{displaymode.fillscreen}
const playerImage = new ex.ImageSource(playerSrc);
const loader = new ex.Loader([playerImage]);
game.start(loader).then(() => {
    const actor = new ex.Actor({
        pos: game.screen.center
    });
    actor.graphics.use(playerImage.toSprite());
    game.currentScene.add(actor);
});