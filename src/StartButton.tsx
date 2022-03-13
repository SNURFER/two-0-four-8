import React from 'react';
import Button from '@mui/material/Button';
import useStore from './useStore';

const StartButton: React.FC = () => {
    const store = useStore();

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Button
                onClick={() => {
                    store.setNumBoard([
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 2, 0],
                        [0, 0, 0, 0],
                    ])
                }}
                sx={{
                    display: 'block',
                }}
                variant="contained"
            >
                Restart Game 
            </Button>
        </div>
    );
};

export default StartButton;
