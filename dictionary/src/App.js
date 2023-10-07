import {useEffect, useState} from 'react'
import {Container} from '@mui/material'
  import axios from 'axios'
import Header from './Header/Header'
const App = () => {
   const[word,setword]= useState('')
   const[category,setcategory]=useState('en')
   const[meanings, setmeanings]= useState([])
  const dictionaryapi = async()=>{
    try{
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/plane')
      setmeanings(data.data)
      //data.data represents the response data from the API. In this context, it's assumed that the API response structure includes a data property, and that's why data.data is used
  }
  catch(error){
      console.log(error)
  }
  console.log(meanings)
}
  useEffect (()=>{
    dictionaryapi();
  },[])
  return (
     <div className='App'style={{height:"100vh",backgroundColor:"#282c34",color:"white"}}> 
    <Container maxWidth="md" style={{height:"100vh",display:"grid",flexDirection:"column"}}>
        <Header word={word} setword={setword} meanings={meanings} setmeanings={setmeanings} category={category} setcategory={setcategory}/>
    </Container>
    </div>
  )
}

export default App
