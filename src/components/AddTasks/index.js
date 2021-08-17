import React, { useState } from 'react'

function AddTask(props){
    const [inputValue, setInputValue] = useState('')

    function handleChange(e) {
        setInputValue(e.target.value)
    }

    function handleClick(){
         if (inputValue && props.handleCallBack) {
            props.handleCallBack(inputValue);
            setInputValue('')
        }
    }
    return(
        <>
        <input type="text" onChange={handleChange} value={inputValue}></input>
        <button onClick={handleClick}>Agregar</button>
        </>
    )
}

export default AddTask;