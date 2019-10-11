import React from 'react';
const List=(props)=>
 {
     return(<div>
         <ul>
             {
                 props.items.map(i=>{
                     return(
                         <li key={i.id}>{i.name}</li>
                     )
                 })
             }
         </ul>
     </div>)
// return(<div key={props.items}>
// {props.items}</div>)
 }
 export default List;
