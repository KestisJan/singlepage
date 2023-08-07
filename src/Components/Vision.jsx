import React from 'react'
import visionPicture from '../images/block-2.jpg'

function Vision() {
  return (
    <div className='vision'>
        <div className='vision-left'>
            <h3>Vision</h3>
            <h1>Upgrade to Iphnone 7 with Apple Plug</h1>
            <p>This isn't 2009. Your phone doesn't have a floppy drive, and it shouldn't have a headphone connector either. When we made iPhone 6 and 6s, the world wasn't ready for the future. Now, it is. Apple Plug is the perfect solution. Fill in your archaic headphone connector with beautiful aluminium and plug yourself into the future.</p>
        </div>
        <div className='vision-right'>
            <img className='vision-image' src={visionPicture} alt='product picture'/>
        </div>
    </div>
  )
}

export default Vision