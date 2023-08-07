import React from 'react'
import innovationImage from '../images/block-4-bg.png'

function Innovation() {
  return (
    <div className='innovation'>
        <div className='innovation-left'>
            <h3>Innovation</h3>
            <h1>Pure Invention</h1>
            <p>Innovation questions everything you know. We removed the floppy drive, and people said we were wrong. We weren't. We removed the CD drive, and again people said we were wrong. We weren't. We never are. Apple Plug isn't just a pristine product. It's an essential part of showing others who you are.</p>
        </div>
        <div className='innovation-right'>
            <img className='innovation-image' src={innovationImage} alt='product image' ></img>
        </div>
    </div>
  )
}

export default Innovation