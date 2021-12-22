// import React from 'react'

const Button = ({color,text,deleteAll}) => {
    return (
        <div>
            <button style={{backgroundColor:color}} className="btn" onClick={()=>deleteAll()}>{text}</button>
        </div>
    )
}

export default Button
