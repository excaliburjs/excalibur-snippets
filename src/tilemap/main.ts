import * as ex from 'excalibur';
import rougeLikeImageSrc from './roguelike-pack/Spritesheet/roguelikeSheet_transparent.png';

const game = new ex.Engine({
    width: 600,
    height: 400
});


// start-snippet{tilemap}
// Load your favorite tileset (maybe from Kenny.nl)
const kennyRougeLikePack = new ex.ImageSource(rougeLikeImageSrc);

// Create a sprite sheet
const rougeLikeSpriteSheet = ex.SpriteSheet.fromImageSource({
    image: kennyRougeLikePack,
    grid: {
        rows: 31,
        columns: 51,
        spriteHeight: 16,
        spriteWidth: 16
    },
    spacing: {
        margin: {
            x: 1,
            y: 1
        }
    }
});

// Create a tilemap
const tilemap = new ex.TileMap({
    rows: 10,
    columns: 10,
    tileWidth: 16,
    tileHeight: 16,
});

// loop through tilemap cells
for (let cell of tilemap.tiles) {
    const sprite = rougeLikeSpriteSheet.getSprite(0, 0);
    if (sprite) {
        cell.addGraphic(sprite);
    }
}
// end-snippet{tilemap}

const loader = new ex.Loader([kennyRougeLikePack])
game.start(loader).then(() => {
    game.currentScene.camera.pos = ex.vec(5 * 16, 5 * 16);
    game.currentScene.camera.zoom = 4;
    game.currentScene.add(tilemap);
});

