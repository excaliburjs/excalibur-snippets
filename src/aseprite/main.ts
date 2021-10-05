import * as ex from 'excalibur';
import * as aseprite from '@excaliburjs/plugin-aseprite';
import beetlejson from './beetle.json';
import beetlepng from './beetle.png';

// start-snippet{aseprite}
const game = new ex.Engine({
    width: 600,
    height: 400,
    displayMode: ex.DisplayMode.FitScreen
});

const asepriteSheet = new aseprite.AsepriteResource(beetlejson);
// hack for parcel v2 asset paths
// not needed in webpack
asepriteSheet.convertPath = (originPath, relativePath) => {
    // convertPath allows you to change how excalibur locates the resource
    return beetlepng;
}

const loader = new ex.Loader([asepriteSheet]);
game.start(loader).then(() => {
    const actor = new ex.Actor({pos: game.screen.center });
    actor.graphics.use(asepriteSheet.getAnimation('Loop') as ex.Animation)

    game.currentScene.add(actor);
});

// end-snippet{aseprite}