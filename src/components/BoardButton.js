import React from 'react'
import "./styles.css"

const BoardButton = () => {

    // const [output, setOutput] = useState("0")

    // const HandleSolution = (v) => {
    //   output += v;
    //   console.log(v)
    //   setOutput(output)
    // }
  return (
    <div className='container'>
        <button className='btn'>7</button>
        <button className='btn'>8</button>
        <button className='btn'>9</button>
        <button className='btn'>/</button>
        <button className='btn'>6</button>
        <button className='btn'>5</button>
        <button className='btn'>4</button>
        <button className='btn'>*</button>
        <button className='btn'>3</button>
        <button className='btn'>2</button>
        <button className='btn'>1</button>
        <button className='btn'>+</button>
        <button className='btn'>C</button>
        <button className='btn'>0</button>
        <button className='btn'>=</button>
        <button className='btn'>-</button>
    </div>
  )
}

export default BoardButton