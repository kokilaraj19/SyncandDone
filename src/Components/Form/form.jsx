import './form.css'
import '../../utility.css'
import {useState} from 'react'
import {v4 as uuid} from 'uuid'

export const Form = (props) => {
   const {list,setList} = props;

   const [date,setDate] = useState(`${new Date().getDate()}-0${new Date().getMonth()+1}-${new Date().getFullYear()}}`);
   const [activity,setActivity] = useState("")
   

   const listHandler= (event) =>{
      event.preventDefault();
      if(!activity) return;

      setList([...list,{id: uuid(),date,activity,isDone: false}])
      setDate("")
      setActivity("")
   }
   
   return( 
   <div className="form">
      <h2>Add an activity??</h2>
      <form action="">
        <input className="input-bg" value= {`${new Date().getDate()}-0${new Date().getMonth()+1}-${new Date().getFullYear()}`} onChange={(e)=>setDate(e.target.value)} type="text" disabled />
        <input className="input-bg" onChange={(e) => setActivity(e.target.value)} value= {activity} type="text" placeholder="Type your to-do" required={true} />
        <button className="input-bg" onClick={(e)=>listHandler(e)}>Add</button>
      </form>
   </div>
   );
}