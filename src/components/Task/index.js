import React, {useState} from 'react'

function Task(props) {
    const[status, setStatus] = useState(true)

    function handleToggle(){
        setStatus((prevStatus)=>!prevStatus)
    }


    return(
        <li onClick={handleToggle} style={status? {color:'back'} : {color:'green'}}>
        {props.name}
        </li>
    )
}

export default Task;