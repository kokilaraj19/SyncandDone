import './To-do-List.css'
import {MdDelete} from 'react-icons/md'

export function TodoList(props){
  const {list,setList} = props;
  const DeleteHandler = (id) =>{
   setList(list.filter((item) => item.id !== id))
  }
  const isDoneHandler = ({id}) =>{
    console.log(id)
    setList(list.map((item) => item.id===id? ({...item,isDone: !item.isDone}): item))
  }
  const sortHandler = (event) =>{
     const donearr=list.filter((it) => it.isDone);
     const notdonearr = list.filter((it) => !it.isDone)
     event.target.value === "Completed" ? setList([...donearr,...notdonearr]): setList([...notdonearr,...donearr]);
  }
  const clearHandler = () =>{
    setList([])
    console.log("inside")
  }
  return (
    <div className='List-container'> 
      <div className='empty-container'>   
         {list.length>0 ? list.map((item) => <Item  key={item.id} id={item.id} date={item.date} activity={item.activity} isDone= {item.isDone} isdoneHandler = {isDoneHandler} deleteHandler={DeleteHandler }/>): ""}
        

      </div>
       <section className='sorting-container'>
            <select onChange={sortHandler} id='choices'>
               <option>Filter By</option>
               <option>Completed</option>
               <option>Not completed</option>
            </select>
            <button onClick={clearHandler}>Clear List</button>
        </section>
    </div>

    )
}

function Item(props){
  const {id,activity,isDone,deleteHandler,isdoneHandler} = props;
  // console.log(isDone)
  
  return (
    <div key={id} className='item-flex item-font'>
      <input type="checkbox" value={isDone} onChange={() => isdoneHandler({id})}/>
      <p style ={ props.isDone? {textDecoration: "line-through",textTransform: "capitalize"}: {textTransform: "capitalize"}}>{activity}</p>
      <MdDelete onClick={() => deleteHandler(id)}/>
    </div>
  );
}
