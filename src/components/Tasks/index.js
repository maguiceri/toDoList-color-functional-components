import React from 'react'
import Task from "../Task"

function Tasks(props){

    function handleCallBack(name){
        console.log("padre" + name)
        props.handleCallBack(name)
    }

    return(
        <ul>
            {props.tasks.map((task, key) => {
                return (<Task handleCallBack={handleCallBack} name={task.value} isCompleted={task.isCompleted} key={key} />)
            })}
        </ul>
    )
}

export default Tasks;