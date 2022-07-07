import * as ex from 'excalibur';

const game = new ex.Engine({
    width: 600,
    height: 400
});

// start-snippet{canvas}
const canvas = new ex.Canvas({
    width: 200,
    height: 200,
    cache: true,  // If true draw once until flagged dirty again, otherwise draw to Canvas every frame
    draw: (ctx) => {
        console.log('With cache=true I draw once');
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, 200, 200);
    }
})

const actor = new ex.Actor({
    pos: game.screen.center
});

actor.graphics.use(canvas);
// end-snippet{canvas}

game.start().then(() => {
    game.currentScene.add(actor);
});