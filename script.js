window.onload = function(){

    var stage = document.getElementById("stage");
    var context = stage.getContext("2d");
    document.addEventListener("keydown",function(event){
        switch (event.keyCode) {
            case 37: //Left
                velocityX -= velocity;
                velocityY = 0;
                break;

            case 38: //Up
                velocityX = 0;
                velocityY -= velocity;
                break;
        
            case 39: //Right
                velocityX = velocity;
                velocityY = 0;
                break;
            
            case 40: //Down
                velocityX = 0;
                velocityY = velocity;
                break;
        
            default:
                break;
        }
   });

    setInterval(game, 80);

    const velocity = 1;
    var velocityX = velocityY = 0;
    var pointX = pointY = 10;

    var lenghtSquare = 30; 
    var countSquare = 20;

    var appleX = appleY = 15;

    var trail = [];
    tail = 5;

    function game(){
        
        pointX += velocityX;
        pointY += velocityY;

        if(pointX < 0){
            pointX = pointY = 10;
            velocityX = velocityY = 0;
            tail = 5;
        }

        if(pointX > countSquare - 1){
            pointX = pointY = 10;
            velocityX = velocityY = 0;
            tail = 5;
        }

        if(pointY < 0){
            pointX = pointY = 10;
            velocityX = velocityY = 0;
            tail = 5;
        }

        if(pointY > countSquare - 1){
            pointX = pointY = 10;
            velocityX = velocityY = 0;
            tail = 5;
        }

        context.fillStyle = "black";
        context.fillRect(0,0, stage.width, stage.height);

        context.fillStyle = "red";
        context.fillRect(appleX*lenghtSquare, appleY*lenghtSquare, lenghtSquare, lenghtSquare);

        context.fillStyle = "green";
        for(var i = 0; i < trail.length; i++){

            context.fillRect(trail[i].x*lenghtSquare, trail[i].y*lenghtSquare, lenghtSquare-1, lenghtSquare-1);

            if(trail[i].x == pointX && trail[i] == pointY){
                pointX = pointY = 10;
                velocityX = velocityY = 0;
                tail = 5;
            }

        }

        trail.push({x:pointX, y:pointY})
        while (trail.length > tail) {
            trail.shift();
        }

        if(appleY == pointY && appleX == pointX){
            tail++;
            appleX = Math.floor(Math.random());
            appleY = Math.floor(Math.random());
        }

    }

}