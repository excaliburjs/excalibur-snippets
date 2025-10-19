import * as ex from 'excalibur';
import { ExcaliburGraphicsContext } from 'excalibur';

import kennyCardsImageSrc from './kenny-cards.png';

const game = new ex.Engine({
    width: 600,
    height: 400,
    pixelArt: true,
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

enum Suit {
	Hearts = 0,
	Diamonds = 1,
	Clubs = 2,
	Spades = 3
}

enum Rank {
	Ace = 0,
	Two = 1,
	Three = 2,
	Four = 3,
	Five = 4,
	Six = 5,
	Seven = 6,
	Eight = 7,
	Nine = 8,
	Ten = 9,
	Jack = 10,
	Queen = 11,
	King = 12
}


// end-snippet{spritesheet}
const animation = new ex.Animation({
    frames: spriteSheet.sprites.map(s => ({ graphic: s, duration: 300})),
    strategy: ex.AnimationStrategy.PingPong
});

const actor = new ex.Actor({
    pos: ex.vec(game.halfDrawWidth, game.halfDrawHeight),
    scale: ex.vec(2, 2)
});
actor.graphics.use(animation);

game.currentScene.onPostDraw = (ctx: ExcaliburGraphicsContext) => {
	spriteSheet.getSprite(Rank.Ten, Suit.Spades).draw(ctx, actor.pos.x+100, actor.pos.y);

	spriteSheet.getSprite(Rank.Ten, Suit.Hearts).draw(ctx, actor.pos.x-100, actor.pos.y);
}

const loader = new ex.Loader([kennyCardsImage]);
game.start(loader).then(() => {
    game.currentScene.add(actor);
});
