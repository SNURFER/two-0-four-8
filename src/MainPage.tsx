import React from 'react';
import BoardComponent from './BoardComponent';
import MainPageStore, { StoreProvider } from './MainPageStore';
import ScoreComponent from './ScoreComponent';
import StartButton from './StartButton';

const MainPage: React.FC = () => {
    const store = new MainPageStore();

    return (
        <StoreProvider value={store}>
            <div>
                this is mainpage
                <StartButton />
                <ScoreComponent />
                <BoardComponent />
            </div>
        </StoreProvider>
    );
};

export default MainPage;
