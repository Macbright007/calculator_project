import React from 'react'
import "./styles.css"

const Screen = ({ output}) => {
  return (
    <div className='screen'>
        { output }
    </div>
  )
}

export default Screen