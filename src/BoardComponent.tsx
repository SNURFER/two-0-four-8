import { Box, getRadioUtilityClass } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, {useState} from 'react';
import BlockComponent from './BlockComponent';
import MainPageStore from './MainPageStore';
import { getRandomInt } from './RandomUtil';
import useStore from './useStore';

const BoardComponent: React.FC = () => {
    const store = useStore();
    const blockList = store.getNumBoard();
    const [step, setStep] = useState<number>(0);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(e);
        const newBlockList = store.calculateBoard(blockList, e.code);
        store.setNumBoard(newBlockList);
        setStep(step + 1);
    };

    return (
        <div>
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
                        return <BlockComponent key={`${getRandomInt(10000)}`} num={singleBlockNum} />;
                    });
                })}
            </Box>
            <Box>{step}</Box>
        </div>
    );
};

export default observer(BoardComponent);
