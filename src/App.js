import React, {useState} from 'react'
import AddTasks from './components/AddTasks'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([])
  function handleCallBack(inputValue){
    setTasks([...tasks, inputValue])
  }
  return (
    <>
    <AddTasks handleCallBack={handleCallBack}/>
    <Tasks tasks={tasks}/>
    </>
  );
}

export default App;
