var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.tilemap('desert', 'assets/desert.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/desert_spacing.png');

}

var map;
var layer;

var cursors;
var sprite;
var marker;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    map = game.add.tilemap('desert');

    map.addTilesetImage('tmw_desert_spacing', 'tiles');

    layer = map.createLayer('Ground');

    layer.resizeWorld();

    cursors = game.input.keyboard.createCursorKeys();

    game.input.onDown.add(resize, this);
}

function resize() {

    // layer.offset.x += 50;

    if (layer.displayWidth !== undefined)
    {
        var w = layer.displayWidth + 100;
        var h = layer.displayHeight + 100;
        layer.resize(w, h);
    }
    else
    {
        if (layer.width < 800)
        {
            var w = layer.width + 100;
            var h = layer.height + 100;
            layer.resize(w, h);
        }
    }

}

function randomiseTiles() {

}

function update() {

    if (cursors.up.isDown)
    {
        game.camera.y -= 4;
    }
    else if (cursors.down.isDown)
    {
        game.camera.y += 4;
    }

    if (cursors.left.isDown)
    {
        game.camera.x -= 4;
    }
    else if (cursors.right.isDown)
    {
        game.camera.x += 4;
    }


}

function render() {


}
