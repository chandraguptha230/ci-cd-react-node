import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function FreeSolo({label, handleChange, options = [], value}) {
  return (
      <Autocomplete
        freeSolo
        disableClearable
        selectOnFocus
        // clearOnBlur
        onInputChange={handleChange}
        options={options.map(a => {return a.name})}
        fullWidth
        onChange={(e) => {
          console.log(e)
        }}
        value={value}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            size='small'
            label={label}
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
  );
}
