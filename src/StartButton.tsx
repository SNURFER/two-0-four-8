import React from 'react';
import Button from '@mui/material/Button';

const StartButton: React.FC = () => {
    return (
        <Button
            sx={{
                display: 'block',
            }}
            variant="contained"
        >
            Hello World
        </Button>
    );
};

export default StartButton;
