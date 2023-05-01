const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
const pacmanFrames = document.getElementById("animation");
const ghostFrames = document.getElementById("ghosts");

let createRect = (x, y, width, height, colar) => {
    canvasContext.fillStyle = colar;
    canvasContext.fillRect(x, y, width, height,);
};

let fps = 30;
let oneBlockSize = 20;
let wallColor = "#342DCA";
let wallSpascewidth = oneBlockSize /1.5;
let wallOffset = (oneBlockSize - wallSpascewidth) / 2; 
let wallInnerColor = "black";

let map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1],
    [1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let gemeLoop = () => {
    update()
    draw()
};

let update = () => {
    // tode
};

let draw = () => {
    createRect(0,0, canvas.width, canvas.height, "black")
    // tode
    drawWalls();
};

let gameInterval = setInterval(gemeLoop, 1000 / fps);

let drawWalls = () => {
    for(let i = 0 ; i < map. length; i++) {
        for(let j = 0; j < map[0].length; j++) {
            if(map[i][j] == 1) { // e uma parede
                createRect(
                    j * oneBlockSize, 
                    i * oneBlockSize, 
                    oneBlockSize, 
                    oneBlockSize, 
                    wallColor
                    );
                    if( j > 0 && map[i][j - 1] == 1) {
                        createRect(
                            j * oneBlockSize, 
                            i * oneBlockSize + wallOffset, 
                            wallSpascewidth + wallOffset, 
                            wallSpascewidth, 
                            wallInnerColor
                        );
                    }
                    if(j < map[0].length - 1 && map[i][j + 1] == 1) {
                        createRect(
                            j * oneBlockSize + wallOffset,
                            i * oneBlockSize + wallOffset, 
                            wallSpascewidth + wallOffset, 
                            wallSpascewidth, 
                            wallInnerColor
                        );
                    }
                    if( i > 0 && map[i - 1][j] == 1) {
                        createRect(
                            j * oneBlockSize + wallOffset, 
                            i * oneBlockSize, 
                            wallSpascewidth, 
                            wallSpascewidth + wallOffset, 
                            wallInnerColor
                        );
                    }
                    if(i < map.length - 1 && map[i + 1][j] == 1) {
                        createRect(
                            j * oneBlockSize + wallOffset,
                            i * oneBlockSize  + wallOffset, 
                            wallSpascewidth , 
                            wallSpascewidth  + wallOffset, 
                            wallInnerColor
                        );
                    }
                }
        }
    }
};