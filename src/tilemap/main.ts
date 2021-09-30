import * as ex from 'excalibur';
import { SpriteSheet } from 'excalibur';
import rougeLikeImageSrc from './roguelike-pack/Spritesheet/roguelikeSheet_transparent.png';

const game = new ex.Engine({
    width: 600,
    height: 400
});

const kennyRougeLikePack = new ex.ImageSource(rougeLikeImageSrc);
const rougeLikeSpriteSheet = SpriteSheet.fromImageSource({
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

const tilemap = new ex.TileMap({
    x: 0,
    y: 0,
    rows: 10,
    cols: 10,
    cellWidth: 16,
    cellHeight: 16,
});

for (let cell of tilemap.data) {
    const sprite = rougeLikeSpriteSheet.getSprite(0, 0);
    if (sprite) {
        cell.addGraphic(sprite);
    }
}

const loader = new ex.Loader([kennyRougeLikePack])
game.start(loader).then(() => {
    game.currentScene.camera.zoom = 4;
    game.currentScene.add(tilemap);
});