// import React from 'react'

const Button = ({color,text,toggleShow}) => {
    return (
        <div>
            <button style={{backgroundColor:color}} className="btn" onClick={toggleShow}>{text}</button>
        </div>
    )
}

export default Button
