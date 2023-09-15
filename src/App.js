
import {Header} from './Components/Header/Header'
import {Form} from './Components/Form/form'
import {Footer} from './Components/Footer/Footer'
import { useState } from 'react';
import { TodoList } from './Components/To-do-List/To-do-List';
import './App.css';

function App() {
  const [list,setList] = useState([]);
  return (
    <div className='App'> 
    <Header />
    <Form list= {list} setList={setList}/>
    <TodoList list={list} setList={setList}/>
    <Footer list={list} />
    </div>
  );
}



export default App;
