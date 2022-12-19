import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

function InputRadio() {
    const [textChecked, setTextChecked] = useState(false);
    const [dateChecked, setDateChecked] = useState(false);

    const changeTextChecked = () => {
        const checked = textChecked ? false : true;
        setTextChecked(checked);
        setDateChecked(!checked);
    };

    const changeDateChecked = () => {
        const checked = dateChecked ? false : true;
        setDateChecked(checked);
        setTextChecked(!checked);
    };

    return(
        <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="text" control={<Radio />} label="텍스트" 
                    onChange={changeTextChecked} />
                <FormControlLabel value="date" control={<Radio />} label="날짜" 
                    onChange={changeDateChecked} />
            </RadioGroup>
        </FormControl>
    );
}

export default InputRadio;