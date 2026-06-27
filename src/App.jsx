import { useState,useEffect } from 'react';
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import Progresstracker from './Components/Progresstracker'

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  });

  const addTask = (task)=>{
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index ))
  }

  const clearTasks = () => {
    setTasks([]);
  }
  return (
    <div >
      <header>
        <h1 id='heading'>DayCraft</h1>
        <p><i>Craft Your Day, Conquer Your Goals.</i></p>
        <h4>Plan your tasks, stay focused, and turn every day into meaningful progress.</h4>
      </header>

      <Taskform addTask = {addTask}/>
      <Tasklist tasks = {tasks}
       updateTask = {updateTask} 
       deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks}/>

      {tasks.length>0 && 
      (<button className='clear-btn'
      onClick={clearTasks}>clear All Tasks</button>)}
      
    </div>
  )
}