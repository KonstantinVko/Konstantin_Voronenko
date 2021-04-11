let snake = document.getElementById('snake');
let field = document.getElementById('field');


document.addEventListener('keydown', move)
let timers = [];


let snakePosition = {
    top: 0,
    left: 0
}


function stopTimers() {
    timers.forEach(clearInterval);
}


function move(e) {
    e = e || window.event;
    console.log(snakePosition)


    function startTimer(way) {
        let timer = setInterval(way, 0);
        timers.push(timer)
    }

    function checkPosition() {
        if (snakePosition.top < 0 || snakePosition.top > field.offsetHeight - snake.offsetHeight || snakePosition.left < 0) {
            console.log('stop')
            stopTimers();
        }
    }

    function moveUp() {
        snakePosition.top -= 0.3;
        snake.style.top = snakePosition.top + 'px';
        stopTimers();
        startTimer(moveUp);
        checkPosition();
    }

    function moveDown() {
        snakePosition.top += 0.3;
        snake.style.top = snakePosition.top + 'px';
        stopTimers();
        startTimer(moveDown);
        checkPosition();
    }

    function moveLeft() {
        snakePosition.left -= 0.3;
        snake.style.left = snakePosition.left + 'px';
        stopTimers();
        startTimer(moveLeft);
        checkPosition();
    }

    function moveRight() {
        snakePosition.left += 0.3;
        snake.style.left = snakePosition.left + 'px';
        stopTimers();
        startTimer(moveRight)
        checkPosition();
    }

    if (e.keyCode === 38) {
        moveUp();
    } else if (e.keyCode === 40) {
        moveDown();
    } else if (e.keyCode === 37) {
        moveLeft();
    } else if (e.keyCode === 39) {
        moveRight();
    }
}