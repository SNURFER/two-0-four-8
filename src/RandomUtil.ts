export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export function getRandBlockNum() {
    const randNum = Math.random();

    return randNum >= 0.5 ? 4 : 2;
}

export function getRandLocation(board: number[][]) {
    let row;
    let col;
    row = getRandomInt(4);
    col = getRandomInt(4);

    while (board[row][col] !== 0) {
        row = getRandomInt(4);
        col = getRandomInt(4);
    }

    return { row, col };
}
