import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function PollTitleText() {
  const [titleText, setTitleText] = useState("");
  const handleChange = (event) => {
    const text = event.target.value;
    setTitleText(text);
  };

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
        <TextField id="outlined-basic" label="투표 제목" variant="outlined" 
          onChange={handleChange} />
        </div>
      </Box>
    );
}

export default PollTitleText;