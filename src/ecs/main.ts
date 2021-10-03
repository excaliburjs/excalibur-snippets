import * as ex from 'excalibur';
const game = new ex.Engine({
    width: 600,
    height: 400
});

// start-snippet{ecs}
class SearchComponent extends ex.Component<'search'> {
    public readonly type = 'search'
    constructor(public target: ex.Vector) {
        super();
    }
}

class SearchSystem extends ex.System<ex.TransformComponent | SearchComponent> {
    // Types need to be listed as a const literal
    public readonly types = ['ex.transform', 'search'] as const;

    // Lower numbers mean higher priority
    // 99 is low priority
    public priority = 99;

    // Run this system in the "update" phase
    public systemType = ex.SystemType.Update

    private _searchSpeed = 100 // pixels/sec

    public update(entities: ex.Entity[], delta: number) {
        for (let entity of entities) {
            const target = entity.get(SearchComponent)!.target;
            // ex.TransformComponent is a built in type
            const transform = entity.get(ex.TransformComponent) as ex.TransformComponent;

            const direction = target.sub(transform.pos);
            const motion = direction.normalize().scale(this._searchSpeed);

            // Moves these entities towards the target at 10 pixels per second
            transform.pos = transform.pos.add(motion.scale(delta / 1000))
        }
    }
}

const scene = new ex.Scene();
scene.world.add(new SearchSystem());

// Actors come with batteries included built in features
const actor = new ex.Actor({
    pos: ex.vec(100, 100),
    width: 30,
    height: 30,
    color: ex.Color.Red
});
actor.addComponent(new SearchComponent(ex.vec(600, 400)));
// end-snippet{ecs}

game.addScene('root', scene);
game.start().then(() => {
    game.currentScene.add(actor);
});

