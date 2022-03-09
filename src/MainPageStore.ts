import { createContext } from 'react';
import { action, observable } from 'mobx';
import { getRandBlockNum, getRandLocation } from './RandomUtil';

export const swipeDirections = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
export type SwipeType = typeof swipeDirections[number];

class MainPageStore {
    @observable
    private numBoard: number[][];

    @observable
    private currScore: number;

    public getNumBoard() {
        return this.numBoard;
    }

    constructor() {
        this.numBoard = [
            [0, 0, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        this.currScore = 0;
    }

    @action
    public setNumBoard(newBlockList: number[][]) {
        this.numBoard = newBlockList;
    }

    public calculateBoard(board: number[][], swipe: SwipeType): number[][] {
        const location = getRandLocation(board);
        const row = location['row'];
        const col = location['col'];
        let newBoard = [...board];
        newBoard[row][col] = getRandBlockNum();

        return newBoard;
    }

    // handleSwipe
    // 1. calculateBoard(private) 
    // 2. get location, randomnumber(util) 
    // 3. init random number(private)
    // 4. set(action private) 
    // 5. check end 
}

export const StoreContext = createContext<MainPageStore>({} as MainPageStore);

export const StoreProvider = StoreContext.Provider;

export default MainPageStore;
