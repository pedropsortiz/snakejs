function snakeGame(){

    var stage = document.getElementById("stage");
    var context = stage.getContext("2d");

    setInterval[game, 1000/15];

    const velocity = 1;
    var velocityX = velocityY = 0;
    var pointX = pointY = 10;

    var lenghtSquare = countSquare = 20;

    var appleX = appleY = 15;

    var trail = [];
    tail = 5;

    function game(){
        
        pointX += velocityX;
        pointY += velocityY;

        if(pointX < 0){
            pointX = countSquare - 1;
        }

        if(pointX > countSquare - 1){
            pointX = 0;
        }

        if(pointY < 0){
            pointY = countSquare - 1;
        }

        if(pointY > countSquare - 1){
            pointY = 0;
        }

    }

    context.fillStyle = "black";
    context.fillRect(0,0, stage.clientWidth, stage.height);

}

window.onload = snakeGame();