class Node {
    constructor(gameState, moves) {
        this.gameState = gameState;
        this.moves = moves;
    }
}

const checkPuzzle = (puzzle) => {
    let i = 1;
    for (let entry of puzzle) {
        if (entry !== i) {
            if (i == puzzle.length && entry === -1) {
                return true;
            }
            return false;
        }
        i++;
    }
    return true;
}

const rightMove = (puzzle, spaceIndex) => {
    return puzzle.map((entry, index) => {
        if (index === spaceIndex) {
            return puzzle[index + 1];
        }
        if (index === spaceIndex + 1) {
            return -1;
        }
        return entry;
    });
}

const leftMove = (puzzle, spaceIndex) => {
    return puzzle.map((entry, index) => {
        if (index === spaceIndex) {
            return puzzle[index - 1];
        }
        if (index === spaceIndex - 1) {
            return -1;
        }
        return entry;
    });
}

const upMove = (puzzle, spaceIndex) => {
    const puzzleSize = Math.sqrt(puzzle.length);
    return puzzle.map((entry, index) => {
        if (index === spaceIndex) {
            return puzzle[index - puzzleSize];
        }
        if (index === spaceIndex - puzzleSize) {
            return -1;
        }
        return entry;
    });
}

const downMove = (puzzle, spaceIndex) => {
    const puzzleSize = Math.sqrt(puzzle.length);
    return puzzle.map((entry, index) => {
        if (index === spaceIndex) {
            return puzzle[index + puzzleSize];
        }
        if (index === spaceIndex + puzzleSize) {
            return -1;
        }
        return entry;
    });
}


const generateMoves = (puzzle) => {
    const spaceIndex = puzzle.indexOf(-1);
    switch(spaceIndex) {
        case 0:
            return [rightMove(puzzle, spaceIndex),
                downMove(puzzle, spaceIndex)];
        case 1:
            return [rightMove(puzzle, spaceIndex),
                downMove(puzzle, spaceIndex),
                leftMove(puzzle, spaceIndex)];
        case 2:
            return [downMove(puzzle, spaceIndex),
                leftMove(puzzle, spaceIndex)];
        case 3:
            return [rightMove(puzzle, spaceIndex),
                downMove(puzzle, spaceIndex),
                upMove(puzzle, spaceIndex)];
        case 4: 
            return [rightMove(puzzle, spaceIndex),
                downMove(puzzle, spaceIndex),
                upMove(puzzle, spaceIndex),
                leftMove(puzzle, spaceIndex)];
        case 5:
            return [downMove(puzzle, spaceIndex),
                upMove(puzzle, spaceIndex),
                leftMove(puzzle, spaceIndex)];
        case 6:
            return [rightMove(puzzle, spaceIndex),
                upMove(puzzle, spaceIndex)];
        case 7: 
            return [rightMove(puzzle, spaceIndex),
                upMove(puzzle, spaceIndex),
                leftMove(puzzle, spaceIndex)];
        case 8:
            return [upMove(puzzle, spaceIndex),
                leftMove(puzzle, spaceIndex)];
        default:
            return null;
    }
    
}

const tests = [
    [1, 2, 3,
    4, 5, 6,
    7, 8, -1],

    [2, 6, 3,
    -1, 1, 8,
    4, 7, 5]
];

for (test of tests) {
    let tree = new Node(test);
    let queue = [];

    for (let child of generateMoves(tree.gameState)) {
        console.log(child);
    }
}

