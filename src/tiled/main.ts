// start-snippet{tiled}
import * as ex from 'excalibur'
import * as tiled from '@excaliburjs/plugin-tiled';
import exampleCityUrl from './example-city.tmx';
import tileset from './assets/kenny-rpg-urban-pack/tilemap_packed.png'; 

const game = new ex.Engine({
    width: 600,
    height: 400,
    displayMode: ex.DisplayMode.FitScreen
});

const tiledMapResource = new tiled.TiledMapResource(exampleCityUrl);

// Only necessary for parcel v2 rearranging assets at the root
// or if you have a build system that moves resources linked by the .tmx
tiledMapResource.convertPath = (tmxLocation, relativePath) => {
    const resourceName = relativePath.split('/').at(-1)?.split('.')[0];
    // for each linked tileset
    if (tileset.includes(resourceName)) {
        return tileset;
    }
}
const loader = new ex.Loader([tiledMapResource])
game.start(loader).then(() => {
    tiledMapResource.addTiledMapToScene(game.currentScene);
    game.currentScene.camera.zoom = 2;
});
// end-snippet{tiled}