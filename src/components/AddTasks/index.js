import React, { useState } from 'react'

function AddTask(props){
    const [value, setValue] = useState('')

    function handleChange(e) {
        setValue(e.target.value)
    }

    function handleClick(){
         if (value && props.handleInputValue) {//
            props.handleInputValue(value);
            setValue('')
        }
    }
    return(
        <>
        <input type="text" onChange={handleChange} value={value}></input>
        <button onClick={handleClick}>Agregar</button>
        </>
    )
}

export default AddTask;