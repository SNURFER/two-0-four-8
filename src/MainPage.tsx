import React from 'react';
import BoardComponent from './BoardComponent';
import MainPageStore, { StoreProvider } from './MainPageStore';
import ScoreComponent from './ScoreComponent';
import StartButton from './StartButton';

const MainPage: React.FC = () => {
    const store = new MainPageStore();

    return (
        <StoreProvider value={store}>
            <div style={{
                textAlign: 'center',
                fontSize: '200%',
                color: '#808080',
            }}>
                Game 2048 
                <StartButton />
                <ScoreComponent />
                <BoardComponent />
            </div>
        </StoreProvider>
    );
};

export default MainPage;
