const checkPuzzle = (puzzle) => {
    let i = 1;
    for (let row of puzzle) {
        for (let col of row) {
            if (col !== i) {
                if (i == puzzle.length * puzzle[0].length && col === -1) {
                    return true;
                }
                return false;
            }
            i++;
        }
    }
    return true;
}

const tests = [
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, -1]],

    [[2, 6, 3],
    [-1, 1, 8],
    [4, 7, 5]]
];

for (test of tests) {
    console.log(checkPuzzle(test));
}