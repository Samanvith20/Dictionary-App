import React from 'react';
import './Header.css';
import { MenuItem, TextField, ThemeProvider, createTheme } from '@mui/material';

import Language from '../data/Language';

const Header = ({ word, setmeanings, setword, meanings, category, setcategory }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff"
      },
      mode: 'dark',
    },
  });

  const handleChange = (e) => {
    setcategory(e.target.value);
    setword('');
    setmeanings([]);
  };

  return (
    <div className='Header'>
      <span className='title'>{word ? word : "Word Master"}</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField
            className='search'
            id="standard-basic"
            label="Search a word"
            value={word}
            onChange={(e) => {
              setword(e.target.value);
            }}
          />
          <TextField
            className='select'
            select
            label="Select"
            value={category}
            onChange={(e) => handleChange(e)}
          >
            {Language.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
