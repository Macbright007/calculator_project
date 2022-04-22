import { useState } from 'react';
import './App.css';
import BoardButton from './components/BoardButton';
import Screen from './components/Screen';

const App = () => {

  const [output, setOutput] = useState("0");

  const HandleSolution = (v) => {
    console.log(v);
    setOutput(`${output === '0' ? '' : output} ${v}`)
  }
   
  const handleSubmit = () =>{
    setOutput(eval(output))
  }
  const resetHandle = () => {
    setOutput("0")
  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <Screen output={output}/>
      <BoardButton HandleSolution={HandleSolution} resetHandle={resetHandle} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
