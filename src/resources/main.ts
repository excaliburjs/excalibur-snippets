import * as ex from 'excalibur';
const game = new ex.Engine({
    width: 600,
    height: 400,
    displayMode: ex.DisplayMode.FitScreen
});
// start-snippet{resources}
// Because snippets uses a bunder we load the image with an import
import playerUrl from './player.png';

// If you aren't using a bundler like parcel or webpack you can do this:
// const imagePlayer = new ex.ImageSource('./player.png')
const Resources = {
    ImagePlayer: new ex.ImageSource(playerUrl),
    //... more resources
}

const loader = new ex.Loader([...Object.values(Resources)]);

class Player extends ex.Actor {
    public onInitialize(engine: ex.Engine) {
        // set as the "default" drawing
        this.graphics.use(Resources.ImagePlayer.toSprite());
    }
}
// end-snippet{resources}

game.start(loader).then(() => {
    game.currentScene.add(new Player());
    game.currentScene.camera.pos = ex.vec(0, 0);
    game.currentScene.camera.zoom = 4;
});
