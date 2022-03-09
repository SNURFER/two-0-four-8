import React from 'react';
import Box from '@mui/material/Box';

interface IProps {
    num: number;
}

const BlockComponent: React.FC<IProps> = ({ num }: IProps) => {
    return (
        <Box
            component="div"
            sx={{
                display: 'inline',
                p: 1,
                m: 1,
                bgcolor: theme => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: theme => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: theme => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
                borderRadius: 2,
                fontSize: 40,
                textAlign: 'center',
                width: 50,
                height: 50,
            }}
        >
            {num !== 0 ? num : undefined}
        </Box>
    );
};

export default BlockComponent;
