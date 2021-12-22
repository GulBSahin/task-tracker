
import { useState } from 'react/cjs/react.development';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';


function App() {
  const [tasks, setTasks] = useState(
    [
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]
  );

  const [showAddTask, setShowAddTask]= useState (true);
  //ADD TASK TO
const addTask=(newTask)=>{
  const id=Math.floor(Math.random()*100)+1;
  const addNewTask = { id, ...newTask}
  setTasks([...tasks, addNewTask])
}

  //DELETE TASKS 
  const deleteTask = (deletedTaskId) => {
// console.log("delete", deletedTaskId);
   setTasks(tasks.filter((task)=> task.id !==deletedTaskId))
  }
  //DELETE ALL
  const deleteAll = () => {
    console.log("delete all");
       setTasks([]);
      }

//TOGGLE DONE
    const toggleDone=(toggleDoneId)=>{
        setTasks(
          tasks.map((task)=>task.id ===toggleDoneId?{...task, isDone:!task.isDone}:task)
        )
    }

//SHOW ADD TASK 
    const toggleShow = () => setShowAddTask(!showAddTask);

  return (
    <div className="container">
       <Header title="TASK MANAGER" 
       deleteAll={deleteAll} 
       toggleShow={toggleShow} 
       showAddTask={showAddTask}/>
       {showAddTask && <AddTask addTask={addTask} />}


       {tasks.length>0?(
       <Tasks deleteTask={deleteTask} tasks={tasks} toggleDone={toggleDone} />
  ): (<p style={{textAlign: "center"}}>No Task to Show</p>)
        }
   </div>
  );
}

export default App;
