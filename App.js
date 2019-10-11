import React,{useState,useEffect} from 'react';
import Form from './Form';
import List from './List';
import axios from 'axios'


const App=()=>{
  const[title,settitle]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8000/fbpost").then(result=>{
      console.log(result)
      settitle(result.data)
    })
})
  const additem=element=>{
    if(element.length===0){
      alert("Type somthing..")
    }else{
      axios.post("http://localhost:8000/fbpost",{name:element}).then(success=>{
        console.log(success)
        settitle([...title,success.data])

      })
    
    }
  }
  return(
    <div><Form additem={additem}/><List items={title}/></div>
  );
}
export default App;
