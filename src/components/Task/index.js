import React from 'react'

function Task(props) {
    function handleClick(){
        const {name, handleCallBack} = props; //desestructuracion name y handleCallBack

        if(handleCallBack) {
        handleCallBack(name)
        }
    }

    return(
        <li onClick={handleClick} style={props.isCompleted? {color:'green'} : {color:'black'}}>
        {props.name}
        </li>
    )
}

export default Task;