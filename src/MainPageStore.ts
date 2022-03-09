import { createContext } from 'react';
import { action, observable } from 'mobx';

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
            [0, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        this.currScore = 0;
    }

    @action
    public setNumBoard(newBlockList: number[][]) {
        this.numBoard = newBlockList;
    }
}

export const StoreContext = createContext<MainPageStore>({} as MainPageStore);

export const StoreProvider = StoreContext.Provider;

export default MainPageStore;
