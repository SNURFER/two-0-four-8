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

export const swipeDirections = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
export type SwipeType = typeof swipeDirections[number];

export function calculateBoard(board: number[][], swipe: SwipeType): number[][] {
    const location = getRandLocation(board);
    const row = location['row'];
    const col = location['col'];
    let newBoard = [...board];
    newBoard[row][col] = -1;

    return newBoard;
}
