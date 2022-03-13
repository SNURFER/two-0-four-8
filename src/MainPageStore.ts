import { createContext } from 'react';
import { action, makeObservable, observable } from 'mobx';
import { getRandBlockNum, getRandLocation } from './RandomUtil';

export const swipeDirections = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
export type SwipeType = typeof swipeDirections[number];

class MainPageStore {
    @observable
    private numBoard: number[][];

    @observable
    private currScore: number;

    @observable
    private isGameOver: boolean;

    public getNumBoard() {
        return this.numBoard;
    }

    public isGameEnded() {
        return this.isGameOver;
    }

    public beginGame() {
        this.isGameOver = false;
    }

    constructor() {
        this.numBoard = [
            [0, 0, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            // [1, 3, 5, 7],
            // [11, 13, 15, 17],
            // [21, 23, 25, 27],
            // [31, 0, 100, 0],
        ];
        this.currScore = 0;
        this.isGameOver = false;
        makeObservable(this);
    }

    @action
    public setNumBoard(newBlockList: number[][]) {
        this.numBoard = newBlockList;
    }

    private calculateBoard(board: number[][], swipe: SwipeType): number[][] {
        let calBoard: number[][] = [...board];
        const countRotateBoard = board[0].map((val, idx) => board.map(row => row[row.length - 1 - idx]));
        const countMidStepBoard: number[][] = [...countRotateBoard];
        const rotateBoard = board[0].map((val, idx) => board.map(row => row[idx]).reverse());
        const midStepBoard: number[][] = [...rotateBoard];

        switch (swipe) {
            case 'ArrowLeft':
                for (let i = 0; i < board.length; i++) {
                    const sorted = this.sortZero(board[i]);
                    const merged = this.mergeDuplicateNum(sorted);
                    calBoard[i] = [...merged];
                }
                break;
            case 'ArrowRight':
                for (let i = 0; i < board.length; i++) {
                    const sorted = this.sortZero(board[i].reverse());
                    const merged = this.mergeDuplicateNum(sorted);
                    calBoard[i] = [...merged.reverse()];
                }
                break;
            case 'ArrowUp':
                for (let i = 0; i < countRotateBoard.length; i++) {
                    const sorted = this.sortZero(countRotateBoard[i]);
                    const merged = this.mergeDuplicateNum(sorted);
                    countMidStepBoard[i] = [...merged];
                }
                calBoard = countMidStepBoard[0].map((val, idx) => countMidStepBoard.map(row => row[idx]).reverse());
                break;
            case 'ArrowDown':
                for (let i = 0; i < rotateBoard.length; i++) {
                    const sorted = this.sortZero(rotateBoard[i]);
                    const merged = this.mergeDuplicateNum(sorted);
                    midStepBoard[i] = [...merged];
                }
                calBoard = midStepBoard[0].map((val, idx) => midStepBoard.map(row => row[row.length - 1 - idx]));
                break;
            default:
                break;
        }

        return calBoard;
    }

    private checkGameOver(board: number[][]): boolean {
        let retVal = true;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (i - 1 >= 0 && (board[i][j] === board[i - 1][j] || board[i - 1][j] === 0)) {
                    retVal = false;
                    break;
                }
                if (i + 1 < board.length && (board[i][j] === board[i + 1][j] || board[i + 1][j] === 0)) {
                    retVal = false;
                    break;
                }
                if (j - 1 >= 0 && (board[i][j] === board[i][j - 1] || board[i][j - 1] === 0)) {
                    retVal = false;
                    break;
                }
                if (j + 1 < board.length && (board[i][j] === board[i][j + 1] || board[i][j + 1] === 0)) {
                    retVal = false;
                    break;
                }
            }
        }
        return retVal;
    }

    public handleSwipe(board: number[][], swipe: SwipeType) {
        // calculate the board with swipe event
        const calBoard = this.calculateBoard(board, swipe);

        if (JSON.stringify(calBoard) !== JSON.stringify(board)) {
            // get location, and randomnumber of next stage block
            const location = getRandLocation(calBoard);
            const { row } = location;
            const { col } = location;
            const newBoard = [...calBoard];
            newBoard[row][col] = getRandBlockNum();

            // set new board
            this.setNumBoard(newBoard);

            // check end
            const isEnd = this.checkGameOver(newBoard);

            if (isEnd) {
                console.log('game over');
                this.isGameOver = true;
            }
        }
    }

    // sort zero to right
    private sortZero(arr: number[]): number[] {
        const newArr = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                newArr.push(arr[i]);
            }
        }

        for (let i = newArr.length; i < arr.length; i++) {
            newArr.push(0);
        }

        return newArr;
    }

    private mergeDuplicateNum(arr: number[]): number[] {
        let dupIdx = -1;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] !== 0 && arr[i + 1] === arr[i]) {
                dupIdx = i;
                break;
            }
        }

        let newArr: number[] = [];

        // if continuous duplicate num exist
        if (dupIdx !== -1) {
            for (let i = 0; i < dupIdx; i++) {
                newArr[i] = arr[i];
            }
            newArr[dupIdx] = 2 * arr[dupIdx];
            for (let i = dupIdx + 1; i < arr.length - 1; i++) {
                newArr[i] = arr[i + 1];
            }
            newArr[arr.length - 1] = 0;
        } else {
            newArr = [...arr];
        }

        return newArr;
    }
}

export const StoreContext = createContext<MainPageStore>({} as MainPageStore);

export const StoreProvider = StoreContext.Provider;

export default MainPageStore;
