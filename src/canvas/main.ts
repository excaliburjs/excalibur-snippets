import * as ex from 'excalibur';

const game = new ex.Engine({
    width: 600,
    height: 400
});

const canvas = new ex.Canvas({
    cache: true,
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

game.start().then(() => {
    game.currentScene.add(actor);
});