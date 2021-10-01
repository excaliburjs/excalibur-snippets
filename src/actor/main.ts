import * as ex from 'excalibur';
const game = new ex.Engine({
    width: 600,
    height: 400,
    displayMode: ex.DisplayMode.FitScreen
});
// start-snippet{actor}
const player = new ex.Actor({
    name: 'player', // optionally assign a name
    width: 50,
    height: 50,
    color: ex.Color.Red
});

// move the player
player.vel.x = 15

// add player to the current scene
game.add(player)
// end-snippet{actor}

game.start().then(() => {
    game.currentScene.camera.pos = ex.vec(0, 0);
});