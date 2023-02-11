import './App.css';
import { useState } from "react"
import {Task} from "./Task"

function App() {
  const [todoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");


  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id : todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName : newTask,
      completed: false,
    }
    setToDoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    setToDoList(todoList.filter((task) => task.id !== id));
  }

  const completeTask = (id) => {
    setToDoList(todoList.map(
      (task) => {
        if(task.id === id) {
          task.completed = true;
          return task;
        }else {
          return task;
        }
      }
    ))
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task 
            taskName={task.taskName} 
            id={task.id} 
            deleteTask={deleteTask} 
            completed={task.completed}
            completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
    
}

// const Planet = (props) => {
//   return (
//     <div>
//       {props.name} {props.isGasPlanet}
//     </div>
//   )
// }
export default App;
