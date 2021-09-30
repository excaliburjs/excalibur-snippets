import * as ex from 'excalibur';

const game = new ex.Engine({
    width: 600,
    height: 400
});

const actor = new ex.Actor({
    pos: ex.vec(100, 100)
});

const text = new ex.Text({
    text: 'Some text here',
    font: new ex.Font({
        family: 'impact',
        size: 24,
        unit: ex.FontUnit.Px
    })
});

actor.graphics.use(text);

game.start().then(() => {
    game.currentScene.add(actor);
});