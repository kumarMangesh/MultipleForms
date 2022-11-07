import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect } from 'react';

export default function AutoComplete({ options, disabled, handleDropdownValue, label, }) {
  const [open, setOpen] = useState(false);
  
  const onChangeOption = (e) => {
    handleDropdownValue(e);
  }

  useEffect(() =>{
    setOpen(true);
  }, [])

  useEffect(() => console.log("open =>", open))

  return (
    <Autocomplete
      disabled={disabled}
      // open={open}
      openOnFocus
      // onOpen={() => setOpen(true)}
      // onClose={() => setOpen(false)}
      // defaultValue={options[0]}
      onChange={(event, newValue) => {
        onChangeOption(newValue);
      }}
      // defaultValue={options[0]}
      // getOptionLabel={(option) => option}
      id="combo-box-demo"
      options={options}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label={label} variant="standard"/>}
    />
  );
}
