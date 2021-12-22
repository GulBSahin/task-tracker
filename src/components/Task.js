import React from 'react'
import {FaTimesCircle} from "react-icons/fa"
const Task = ({task,  toggleDone,deleteTask}) => {
    return (
        <div className={`task ${task.isDone? "done":""}`} onDoubleClick={()=>{
            toggleDone(task.id)
        }
        }>
            <h3>{task.text}
            <FaTimesCircle style={{color: "purple"}} onClick={()=> deleteTask(task.id)}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
