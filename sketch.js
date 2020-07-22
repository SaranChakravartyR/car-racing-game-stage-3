var form,player,game,allplayers,distance = 0;
var car1,car2,carset=[];
var gamestate = 0, playercount = 0;
var database;


function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();

    game = new Game();
    game.getgamestate();
    game.start();
}

function draw(){
    if(playercount === 2){
        game.updategamestate(1);
    }
    if(gamestate === 1){
        clear();
        game.play();
    }
}