import React from 'react';
import './Header.css';
import { MenuItem, TextField, ThemeProvider, createTheme } from '@mui/material';

import Language from '../data/Language';
import { debounce } from "lodash";
//loadsh it is a prebulit nodejs library

const Header = ({ word, setmeanings, setword, meanings, category, setcategory ,lightmode}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main:lightmode?"#0000" : "#fff"
      },
      mode: lightmode?"light":'dark',
    },
  });

  const handleChange = (e) => {
    setcategory(e.target.value);
    setword('');
    setmeanings([]);
  };
   const handleText =debounce((text)=>{
      setword(text)
   },1000)

  return (
    <div className='Header'>
      <span className='title'>{word ? word : "Word Master"}</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField
            className='search'
            id="standard-basic"
            label="Search a word"
            //value={word}
            onChange={(e) => {
              handleText(e.target.value);
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
