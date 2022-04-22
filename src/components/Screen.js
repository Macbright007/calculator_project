import React from 'react'
import "./styles.css"

const Screen = ({ output}) => {
  return (
    <div className='screen'>
        <span>{ output }</span>
    </div>
  )
}

export default Screen