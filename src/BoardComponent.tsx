import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import BlockComponent from './BlockComponent';
import { getRandomInt } from './RandomUtil';
import useStore from './useStore';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { displayPartsToString } from 'typescript';

const BoardComponent: React.FC = () => {
    const store = useStore();
    const blockList = store.getNumBoard();
    const [step, setStep] = useState<number>(0);
    const [open, setOpen] = React.useState(false);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(e);
        store.handleSwipe(blockList, e.code);
        setStep(step + 1);
    };

    const handleClose = () => {
        store.setNumBoard([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 2, 0],
            [0, 0, 0, 0],
        ])
        store.beginGame();
    };

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignContent: 'flex-start',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        maxWidth: 400,
                        height: 400,
                        borderRadius: 1,
                    }}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    {blockList.map(rowBlocks => {
                        return rowBlocks.map(singleBlockNum => {
                            return <BlockComponent key={`${getRandomInt(10000000)}`} num={singleBlockNum} />;
                        });
                    })}
                </Box>
            </div>
            <Box>{step}</Box>
            <Dialog
                open={store.isGameEnded()}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Game Over"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        2048 game is over. Do you want to restart game?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
};

export default observer(BoardComponent);
