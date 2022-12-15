import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

export default function BasicDatePicker() {
  //const [values, setValues] = useState({ time: "" });
  const [values, setValues] = useState("");

  const handleChange = (event) => {
    const { time, value } = event.target;
    setValues({ ...values, [time]: value});
  };

  return (
    <TextField
        id="datetime-local"
        type="datetime-local"
        //defaultValue="2017-05-24T10:30"
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
      />
  );
}