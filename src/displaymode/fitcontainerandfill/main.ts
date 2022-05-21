import * as ex from 'excalibur';
import playerSrc from './player.png';
// start-snippet{displaymode.fitcontainerandfill}
const game = new ex.Engine({
    canvasElementId: 'game',
    width: 600,
    height: 400,
    displayMode: ex.DisplayMode.FitContainerAndFill // highlight-line
});
// end-snippet{displaymode.fitcontainerandfill}
const playerImage = new ex.ImageSource(playerSrc);
const loader = new ex.Loader([playerImage]);
game.start(loader).then(() => {
    const actor = new ex.Actor({
        pos: game.screen.center
    });
    actor.graphics.use(playerImage.toSprite());
    game.currentScene.onPreDraw = (ctx: ex.ExcaliburGraphicsContext) => {
        game.screen.contentArea.draw(ctx, ex.Color.Yellow);
    }
    game.currentScene.add(actor);
});