import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function PollList() {
  const [pollFirst, setPollFirst] = useState("");
  const [pollSecond, setPollSecond] = useState("");
  const [pollThird, setPollThird] = useState("");

  const handleChangeFirst = (event) => {
    const text = event.target.value;
    setPollFirst(text);
  };

  const handleChangeSecond = (event) => {
    const text = event.target.value;
    setPollSecond(text);
  };

  const handleChangeThird = (event) => {
    const text = event.target.value;
    setPollThird(text);
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
          <TextField id="outlined-basic1" label="항목 입력" variant="outlined" 
            onChange={handleChangeFirst} />
      </div>
      <div>
          <TextField id="outlined-basic2" label="항목 입력" variant="outlined" 
            onChange={handleChangeSecond} />
      </div>
      <div>
          <TextField id="outlined-basic3" label="항목 입력" variant="outlined" 
            onChange={handleChangeThird} />
      </div>
    </Box>

  );
}

export default PollList;