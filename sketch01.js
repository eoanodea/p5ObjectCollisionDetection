let molecules = [];
let moleculeKey = [];
const numOfMolecules = 10;
let canvasWidth = 800;
let canvasHeight = 600;
let numRows = 6, numCols = 6;
const minRadius = 20, maxRadius = 25, minVelocity = -4, maxVelocity = 4;
let colWidth, rowHeight;
let numOfIntersections = 0;
let gui;

function setup() {
    canvasWidth = windowWidth
    canvasHeight = windowHeight
    // gui = new dat.GUI();
    // moleculeGUI = new Molecule
    // gui.add(moleculeGUI, 'isFilled')
    createCanvas(canvasWidth, canvasHeight);
    background(127);
    // noLoop();

    rowHeight = canvasHeight / numRows
    colWidth = canvasWidth / numCols
    
    for (let i = 0; i < numOfMolecules; i++) {
        molecules.push(new Molecule(i));
    }
}

function GUI() {
    textSize(20);
    fill("#FFF");
    text("FPS: " + int(getFrameRate()), 10, 30);
    text("Intersections: " + numOfIntersections, 10, 60);
}

//Return the fill color of a molecule
function resetBalls(molecule) {
    return molecule.position.p5.drawingContext.fillStyle
}

function splitIntoGrids() {
    moleculeKey = []
    for(let i = 0; i < (numCols * numRows); i++) {
        moleculeKey.push([]);
    }
    
    molecules.forEach(molecule => {
        const currentCellX = Math.floor(molecule.position.x / colWidth)
        const currentCellY = (Math.floor(molecule.position.y / rowHeight) * numCols)
        
        currentCell = currentCellX + currentCellY
        //If the currentCell is greater or less than the array count
        //The breaks
        currentCell < moleculeKey.length && currentCell >= 0 
        && moleculeKey[currentCell].push(molecule.moleculeId);
    })
}

function draw() {
    background(000);
    GUI();
    drawGrid()
    mapMolecules();
    splitIntoGrids();
    checkIntersections();
}

function mapMolecules() {
    molecules.forEach(molecule => {
        
        // const color = resetBalls(molecule)

        molecule.render();
        molecule.checkEdges();
        molecule.step();
    });
}

//Draws the grid based on parameters
function drawGrid() {
    for(let x = 0; x < canvasWidth; x+=colWidth) {
        for(let y = 0; y < canvasHeight; y+=rowHeight) {
            strokeWeight(1)
            line(x, 0, x, height);
            line(0, y, width, y)
        }
    }
}


//Check MoloculeKeys array for intersections
function checkIntersections() {
    numOfIntersections = 0;
    //Loop through moleculeKey
    moleculeKey.forEach(key => {
        for(let i = 0; i < key.length; i++) {
            for (j = i + 1; j < key.length; j++) {
                if (p5.Vector.sub(
                    molecules[key[i]].position, 
                    molecules[key[j]].position)
                        .mag() < 
                        molecules[key[i]].radius
                            + molecules[key[j]].radius) {
                    molecules[key[i]].isFilled = true;
                    molecules[key[j]].isFilled = true;
                    numOfIntersections++;
                }
            }
        }    
    })
}

// }

// window.onload = function() {
//     const main = new Main();
    // let gui = new dat.GUI();

//     gui.add(main, 'numOfMolecules', 1, 100)
//     gui.add(main, 'speed', -5, 5);
 
// }

