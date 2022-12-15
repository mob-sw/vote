import React, { useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {IconButton} from '@mui/material';
import { createContext } from 'react';

export const checkCircleContext = createContext({ checked: false});

function CheckCircle() {
    const [check, setCheck] = useState(false);

    const change = () => {
        const changeCheckState = !check;
        setCheck(changeCheckState);
    };

    return(
      <IconButton onClick={change}>
        {(check === false) ? <CheckCircleOutlineIcon /> : <CheckCircleIcon />}
      </IconButton>
    );
}

export default CheckCircle;