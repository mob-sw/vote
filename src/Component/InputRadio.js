import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

function InputRadio() {
    return(
        <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="text" control={<Radio />} label="텍스트" />
                <FormControlLabel value="date" control={<Radio />} label="날짜" />
            </RadioGroup>
        </FormControl>
    );
}

export default InputRadio;