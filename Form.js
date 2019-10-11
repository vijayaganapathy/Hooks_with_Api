import React,{useState} from 'react';

function Form(props)
 {
   
const handletitle=(event)=>{
settitle(event.target.value)
}
const Submit=(e)=>{
    props.additem(title);
    console.log(title);
    settitle("")
}
 
const[title,settitle]=useState("");
return(<div><h1>{title}</h1><input type="text" placeholder="type here.." onChange={handletitle}/>
<button onClick={Submit}>Submit</button>
</div>)

}


export default Form;
