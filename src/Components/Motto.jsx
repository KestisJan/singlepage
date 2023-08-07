import React from 'react'
import gif from '../images/animation-1.gif'

function Motto() {
  return (
    <div className='motto'>
        <h1>Just Trust us. It's better.</h1>
        <img className='motto-gif' src={gif} alt='product gif'/>
    </div>
  )
}

export default Motto