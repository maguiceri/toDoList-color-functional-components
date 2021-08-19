import React from 'react'

function Task(props) {
    return(
        <li style={props.isCompleted? {color:'black'} : {color:'red'}}>
        {props.name}
        </li>
    )
}

export default Task;