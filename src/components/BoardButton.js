import React from 'react'
import "./styles.css"

const BoardButton = ({HandleSolution, resetHandle, handleSubmit}) => {

  return (
    <div className='container'>
        <button className='btn' onClick={() => HandleSolution("7")}>7</button>
        <button className='btn' onClick={() => HandleSolution("8")}>8</button>
        <button className='btn' onClick={() => HandleSolution("9")}>9</button>
        <button className='btn' onClick={() => HandleSolution("/")}>/</button>
        <button className='btn' onClick={() => HandleSolution("6")}>6</button>
        <button className='btn' onClick={() => HandleSolution("5")}>5</button>
        <button className='btn' onClick={() => HandleSolution("4")}>4</button>
        <button className='btn' onClick={() => HandleSolution("*")}>*</button>
        <button className='btn' onClick={() => HandleSolution("3")}>3</button>
        <button className='btn' onClick={() => HandleSolution("2")}>2</button>
        <button className='btn' onClick={() => HandleSolution("1")}>1</button>
        <button className='btn' onClick={() => HandleSolution("+")}>+</button>
        <button className='btn' onClick={() => resetHandle("C")}>C</button>
        <button className='btn' onClick={() => HandleSolution("0")}>0</button>
        <button className='btn' onClick={() => handleSubmit("=")}>=</button>
        <button className='btn' onClick={() => HandleSolution("-")}>-</button>
    </div>
  )
}

export default BoardButton