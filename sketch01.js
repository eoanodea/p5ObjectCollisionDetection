let molecules = [];
let moleculeKey = [];
const numOfMolecules = 5;
const canvasWidth = 400;
const canvasHeight = 320;
const numRows = 3, numCols = 3;
let colWidth, rowHeight;


function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background(127);
    
    rowHeight = canvasHeight / numRows
    colWidth = canvasWidth / numCols
    
    for (let i = 0; i < numOfMolecules; i++) {
        molecules.push(new Molecule(i));
    }
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
        //The function breaks
        currentCell < moleculeKey.length && currentCell >= 0 
        && moleculeKey[currentCell].push(molecule.moleculeId);
    })
}

function draw() {
    background(000);
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
            line(x, 0, x, height);
            line(0, y, width, y)
        }
    }
}


//Draws the grid based on parameters
function checkIntersections() {
    //Loop through moleculeKey
    for(let i = 0; i < moleculeKey.length; i++) {
        let intersectingMolecules = []
        //If length is greater than one it means 
        //2 molecules are in the same grid
        if(moleculeKey[i].length > 1) {
            moleculeKey[i].forEach(key => {
                //prints amount of molecules within one grid
                //Pushes to array and dont know what to do after yet
                console.log('yeehaw', key)
                intersectingMolecules.push(key)
            })
        }
        
        console.log("Same grid: ", intersectingMolecules)
    }
}

