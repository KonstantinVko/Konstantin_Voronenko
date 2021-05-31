document.addEventListener("DOMContentLoaded", () => {
    const scoreDisplay = document.getElementById("score");
    const width = 28;
    let score = 0;
    const grid = document.querySelector(".grid");
    const layout = [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        3,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        3,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        4,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        1,
        4,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        4,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        1,
        4,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        4,
        4,
        4,
        4,
        4,
        4,
        0,
        0,
        0,
        4,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        1,
        4,
        0,
        0,
        0,
        4,
        4,
        4,
        4,
        4,
        4,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        4,
        1,
        1,
        1,
        1,
        1,
       1,
        1,
        1,
        4,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        4,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        4,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        4,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        4,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        3,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        3,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
    ];
    // 0 - pac-dots
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power-pellet
    // 4 - empty

    const squares = [];

    //create your board
    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement("div");
            grid.appendChild(square);
            squares.push(square);

            //add layout to the board
            if (layout[i] === 0) {
                squares[i].classList.add("pac-dot");
            } else if (layout[i] === 1) {
                squares[i].classList.add("wall");
            } else if (layout[i] === 2) {
                squares[i].classList.add("ghost-lair");
            } else if (layout[i] === 3) {
                squares[i].classList.add("power-pellet");
            }
        }
    }

    createBoard();

    //create Characters
    //draw pacman onto the board
    let pacmanCurrentIndex = 490;
    let pacmanVelocity = {
        x: 0,
        y: 0,
    };
    const pacmanSpeed = 200;
    squares[pacmanCurrentIndex].classList.add("pac-man");
    //get the coordinates of pacman on the grid with X and Y axis
    // function getCoordinates(index) {
    //   return [index % width, Math.floor(index / width)]
    // }

    // console.log(getCoordinates(pacmanCurrentIndex))
    document.querySelector('div.pac-man').style.opacity = '0';

    let pacmanMovingClass;
    let eatGhost = new Audio('http://gaschamber.hestfamily.com/tfc/sound/duckhunt/pac_ghosteat.wav');
    let startAudio = new Audio('http://gaschamber.hestfamily.com/tfc/sound/duckhunt/pac_start.wav')
    let moveAudio = new Audio('http://gaschamber.hestfamily.com/tfc/sound/duckhunt/pac_chomp.wav');
    let looseAudio = new Audio('http://gaschamber.hestfamily.com/tfc/sound/duckhunt/pac_die.wav');
    looseAudio.volume = 0.5;
    moveAudio.volume = 0.2;
    eatGhost.volume = 0.2;
    moveAudio.playbackRate = 1.1;
    startAudio.playbackRate = 1.1;
    startAudio.volume = 0.4;

    // set pacman velocity
    function setPacmanVelocity(e) {
        if (e.keyCode === 37 || e.detail.dir === 'left') {
            if (
                pacmanCurrentIndex % width !== 0 &&
                !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
                !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")
            ) {
                pacmanVelocity.y = 0;
                pacmanVelocity.x = 1;
                pacmanMovingClass = 'pac-man-go-left';
            }
        }
        if (e.keyCode === 38 || e.detail.dir === 'up') {
            if (
                pacmanCurrentIndex - width >= 0 &&
                !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
                !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")
            ) {
                pacmanMovingClass = 'pac-man-go-top'
                pacmanVelocity.y = 0;
                pacmanVelocity.x = -1;
            }
        }
        if (e.keyCode === 39 || e.detail.dir === 'right') {
            if (
                pacmanCurrentIndex % width < width - 1 &&
                !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
                !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")
            ) {
                pacmanMovingClass = 'pac-man-go-right'
                pacmanVelocity.y = 1;
                pacmanVelocity.x = 0;
            }
        }
        if (e.keyCode === 40 || e.detail.dir === 'down') {
            if (
                pacmanCurrentIndex + width < width * width &&
                !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
                !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")
            ) {
                pacmanMovingClass = 'pac-man-go-bottom'
                pacmanVelocity.y = -1;
                pacmanVelocity.x = 0;
            }
        }
        checkForGameOver();
        console.log(pacmanVelocity, e.keyCode);
    }


    //move pacman
    function movePacman() {
        squares[pacmanCurrentIndex].classList.remove(pacmanMovingClass);
        squares[pacmanCurrentIndex].classList.remove("pac-man");
        setInterval(() => {
            if (pacmanVelocity.x === 1 && pacmanVelocity.y === 0) {
                if (
                    pacmanCurrentIndex % width !== 0 &&
                    !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
                    !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")
                ) {
                    squares[pacmanCurrentIndex].classList.remove(pacmanMovingClass);
                    squares[pacmanCurrentIndex].classList.remove("pac-man");
                    pacmanCurrentIndex -= 1;
                    moveAudio.play();
                }
                if (squares[pacmanCurrentIndex - 1] === squares[363]) {
                    pacmanCurrentIndex = 391;
                }
            }
            if (pacmanVelocity.x === -1 && pacmanVelocity.y === 0) {
                if (
                    pacmanCurrentIndex - width >= 0 &&
                    !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
                    !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")
                ) {
                    squares[pacmanCurrentIndex].classList.remove(pacmanMovingClass);
                    squares[pacmanCurrentIndex].classList.remove("pac-man");
                    pacmanCurrentIndex -= width;
                    moveAudio.play();
                }
            }
            if (pacmanVelocity.x === 0 && pacmanVelocity.y === 1) {
                if (
                    pacmanCurrentIndex % width < width - 1 &&
                    !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
                    !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")
                ) {
                    squares[pacmanCurrentIndex].classList.remove(pacmanMovingClass);
                    squares[pacmanCurrentIndex].classList.remove("pac-man");
                    pacmanCurrentIndex += 1;
                    moveAudio.play();
                }
                if (squares[pacmanCurrentIndex + 1] === squares[392]) {
                    pacmanCurrentIndex = 364;
                }
            }
            if (pacmanVelocity.x === 0 && pacmanVelocity.y === -1) {
                if (
                    pacmanCurrentIndex + width < width * width &&
                    !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
                    !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")
                ) {
                    squares[pacmanCurrentIndex].classList.remove(pacmanMovingClass);
                    squares[pacmanCurrentIndex].classList.remove("pac-man");
                    pacmanCurrentIndex += width;
                    moveAudio.play();
                }
            }
            squares[pacmanCurrentIndex].classList.add(pacmanMovingClass);
            squares[pacmanCurrentIndex].classList.add("pac-man");
            pacDotEaten();
            powerPelletEaten();
        }, pacmanSpeed);
    }

    // what happens when you eat a pac-dot
    function pacDotEaten() {
        if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
            score++;
            if (score < 50) {
                document.getElementById("score").classList.add("low-score");
            } else if (score > 100) {
                document.getElementById("score").classList.add("mid-score");
            } else if (score > 200) {
                document.getElementById("score").classList.add("high-score");
            }
            scoreDisplay.innerHTML = score;
            squares[pacmanCurrentIndex].classList.remove("pac-dot");
            checkForWin();
        }
    }

    //what happens when you eat a power-pellet
    function powerPelletEaten() {
        if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
            score += 10;
            ghosts.forEach((ghost) => (ghost.isScared = true));
            setTimeout(unScareGhosts, 5000);
            squares[pacmanCurrentIndex].classList.remove("power-pellet");
            checkForWin();
        }
    }

    //make the ghosts stop flashing
    function unScareGhosts() {
        ghosts.forEach((ghost) => (ghost.isScared = false));
    }

    //create ghosts using Constructors
    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className;
            this.startIndex = startIndex;
            this.speed = speed;
            this.currentIndex = startIndex;
            this.isScared = false;
            this.timerId = NaN;
        }
    }

    //all my ghosts
    let ghosts = [
        new Ghost("blinky", 348, 200),
        new Ghost("stinky", 376, 800),
        new Ghost("inky", 351, 1400),
        new Ghost("clyde", 379, 1400),
        new Ghost("clyde", 379, 1400),
        new Ghost("clyde", 379, 1400),
        new Ghost("stinky", 379, 1400),
        new Ghost("blinky", 379, 400),
    ];

    //draw my ghosts onto the grid
    ghosts.forEach((ghost) => {
        squares[ghost.currentIndex].classList.add(ghost.className);
        squares[ghost.currentIndex].classList.add("ghost");
    });

    function moveGhost(ghost) {
        const directions = [-1, +1, width, -width];
        let direction = directions[Math.floor(Math.random() * directions.length)];
        ghost.timerId = setInterval(function () {
            //if the next square your ghost is going to go to does not have a ghost and does not have a wall
            if (
                !squares[ghost.currentIndex + direction].classList.contains("ghost") &&
                !squares[ghost.currentIndex + direction].classList.contains("wall")
            ) {
                //remove the ghosts classes
                squares[ghost.currentIndex].classList.remove(ghost.className);
                squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
                //move into that space
                ghost.currentIndex += direction;
                squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
                //else find a new random direction to go in
            } else direction = directions[Math.floor(Math.random() * directions.length)];

            //if the ghost is currently scared
            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add("scared-ghost");
            }

            //if the ghost is currently scared and pacman is on it
            if (
                ghost.isScared &&
                squares[ghost.currentIndex].classList.contains("pac-man")
            ) {
                eatGhost.play();
                squares[ghost.currentIndex].classList.remove(
                    ghost.className,
                    "ghost",
                    "scared-ghost"
                );
                ghost.currentIndex = ghost.startIndex;
                score += 100;
                squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
            }
            checkForGameOver();
        }, ghost.speed);
    }

    //check for a game over
    function checkForGameOver() {
        if (
            squares[pacmanCurrentIndex].classList.contains("ghost") &&
            !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
        ) {
            ghosts.forEach((ghost) => clearInterval(ghost.timerId));
            document.removeEventListener("keyup", movePacman);
            document.removeEventListener('swiped', setPacmanVelocity);
            pacmanVelocity.x = 0;
            pacmanVelocity.y = 0;
            looseAudio.play();
            //display game over screen and refresh after 3s to rest game
            document.getElementById("game-over-screen").style.display = "flex";
            setTimeout(function () {
                window.location.reload();
            }, 33);
        }
    }

    setInterval(() => {
        window.navigator.vibrate(1000);
    }, 5);

    //check for a win - more is when this score is reached
    function checkForWin() {
        if (score === 274) {
            ghosts.forEach((ghost) => clearInterval(ghost.timerId));
            document.removeEventListener("keyup", movePacman);
            pacmanVelocity.x = 0;
            pacmanVelocity.y = 0;
            //display you won screen and refresh after 3s to rest game
            document.getElementById("you-won-screen").style.display = "flex";
            setTimeout(function () {
                window.location.reload();
            }, 3000);
        }
    }


    //start the game when enter is pressed
    function startGame(event) {
        console.log(event)
        if (event.keyCode === 13 || event.type === 'touchstart') {
            startAudio.play();
            setTimeout(() => {
                document.querySelector('div.pac-man').style.opacity = '100';
                document.removeEventListener("keydown", startGame);
                document.removeEventListener('swiped', startGame);
                //remove start screen
                document.getElementById("start-screen").style.display = "none";
                //set pacman velocity and enable movement
                document.addEventListener("keyup", setPacmanVelocity);
                document.addEventListener('swiped', setPacmanVelocity);
                movePacman();
                // move the Ghosts randomly
                ghosts.forEach((ghost) => moveGhost(ghost));
            }, 2000)
        }
    }

    document.addEventListener("keydown", startGame);


    const mediaQuery = window.matchMedia('(max-width: 1000px)')

    function handleTabletChange(e) {
        // Check if the media query is true
        if (e.matches) {
            function disableScroll() {
                // Get the current page scroll position
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

                    // if any scroll is attempted, set this to the previous value
                    window.onscroll = function() {
                        window.scrollTo(scrollLeft, scrollTop);
                    };
            }
            disableScroll();


            document.getElementById('start-msg').innerText = 'Нажмите на экран чтобы начать';
            document.querySelector('div.overlay-screen > h2:last-child').innerHTML = 'Для управления испульзуйте свайп вверх, вниз, влево, вправо';

            startAudio.play();
            setTimeout(() => {
                document.querySelector('.grid').style.opacity = '100';
                document.querySelector('div.pac-man').style.opacity = '100';
                document.removeEventListener("keydown", startGame);
                document.removeEventListener('swiped', startGame);
                //remove start screen
                document.getElementById("start-screen").style.display = "none";
                //set pacman velocity and enable movement
                document.addEventListener("keyup", setPacmanVelocity);
                document.addEventListener('swiped', setPacmanVelocity);
                movePacman();
                // move the Ghosts randomly
                ghosts.forEach((ghost) => moveGhost(ghost));
            }, 2000)

        }
    }

// Register event listener
    mediaQuery.addListener(handleTabletChange)

// Initial check
    handleTabletChange(mediaQuery)
});

