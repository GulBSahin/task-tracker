// import React from 'react'

import Button from "./Button"
import DeleteAllButton from "./DeleteAllButton"

const Header = ({title, deleteAll, toggleShow, showAddTask}) => {
    return (
        <div>
            <header className="header">
          <h1>  {title} </h1>
          <div className="buttons">
          <Button 
          color={showAddTask ? "#4fb576" :"purple"} text={showAddTask ? "Close Add Task Bar" :"Show Add Task Bar" } 
          toggleShow={toggleShow}
          
          />
          <DeleteAllButton color="#4fb576" text="Delete All" deleteAll={deleteAll}/>
          </div>
            </header >
        </div>
    )
}

export default Header
