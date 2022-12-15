import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function InputList() {
    return(
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '35ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
            <TextField id="outlined-basic1" label="항목 입력" variant="outlined" />
        </div>
        <div>
            <TextField id="outlined-basic2" label="항목 입력" variant="outlined" />
        </div>
        <div>
            <TextField id="outlined-basic3" label="항목 입력" variant="outlined" />
        </div>
      </Box>

    );
}

export default InputList;