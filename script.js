function snakeGame(){

    var stage = document.getElementById("stage");
    var context = stage.getContext("2d");

    context.fillStyle = "black";
    context.fillRect(0,0, stage.clientWidth, stage.height);

}

window.onload = snakeGame();