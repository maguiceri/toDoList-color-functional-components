import React, {useState} from 'react'
import AddTasks from './components/AddTasks'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([])

  function handleInputValue(value){
    setTasks([...tasks, 
    {
      value,
      isCompleted: false
    }
    ])
  }

  function handleCallBack(name){
    console.log("abuelo " + name)

  }
  return (
    <>
    <AddTasks handleInputValue={handleInputValue}/>
    <Tasks handleCallBack={handleCallBack} tasks={tasks}/>
    </>
  );
}

export default App;
