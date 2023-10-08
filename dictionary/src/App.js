import {useEffect, useState} from 'react'
import {Container, Switch, styled} from '@mui/material'
  import axios from 'axios'
import Header from './Header/Header'
import Definition from './Definition/Definition'
import { grey } from '@mui/material/colors'
import Footer from './Footer/Footer'
const App = () => {
   const[lightmode,setlightmode]=useState('')
   const[word,setword]= useState('')
   const[category,setcategory]=useState('en')
   const[meanings, setmeanings]= useState([])
   const Darkmode = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: grey[600],
      '&:hover': {
        backgroundColor: (grey[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: grey[600],
    },
  }));
  const dictionaryapi = async()=>{
    try{
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setmeanings(data.data)
      //data.data represents the response data from the API. In this context, it's assumed that the API response structure includes a data property, and that's why data.data is used
  }
  catch(error){
      console.log(error)
  }
  console.log(meanings)
}
useEffect(() => {
  dictionaryapi();
  // eslint-disable-next-line
}, [word, category]);
  return (
     <div className='App'style={{height:"100vh",backgroundColor: lightmode ? "#fff": "#282c34",color: lightmode ? "black":"white", transition:"all 0.5sec linear",}}> 
    <Container maxWidth="md" style={{height:"100vh",display:"grid",flexDirection:"column",justifyContent:"space-evenly"}}>
    <div
          style={{ position: "absolute", top: 0,right:15,paddingTop: 10  }}> 
          <span>{lightmode? "Dark":"light"}mode</span>
          <Darkmode checked={lightmode} onChange={() => setlightmode(!lightmode)} />
          </div>

        <Header word={word} setword={setword} meanings={meanings} setmeanings={setmeanings} category={category} setcategory={setcategory} lightmode={lightmode}/>
         <Definition meanings={meanings} word={word} category={category} lightmode={lightmode} />
         <Footer/>
    </Container>
    </div>
  )
}

export default App
