import * as ex from 'excalibur';
import playerSrc from './player.png';
const game = new ex.Engine({
    width: 600,
    height: 400,
    displayMode: ex.DisplayMode.Fixed // highlight-line
});
const playerImage = new ex.ImageSource(playerSrc);
const loader = new ex.Loader([playerImage]);
game.start(loader).then(() => {
    const actor = new ex.Actor({
        pos: game.screen.center
    });
    actor.graphics.use(playerImage.toSprite());
    game.currentScene.add(actor);
});
document.getElementById('go-fullscreen')!.addEventListener('click', () => {
    game.screen.goFullScreen();
});
