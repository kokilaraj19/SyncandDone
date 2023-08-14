import './form.css'
import '../../utility.css'
export const Form = () => {
   return( 
   <div className="form">
      <h2>Add an activity??</h2>
      <form action="">
        <input className="input-bg" type="date" name="" id=""  min={`${new Date().getFullYear()}-${new Date().getMonth()< 9? 0: ""}${new Date().getMonth()+1}-${new Date().getDate()}`}/>
        <input className="input-bg" type="text" placeholder="Type your to-do"/>
        <button className="input-bg">Add</button>
      </form>
   </div>
   );
}