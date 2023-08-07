import React from 'react'
import aluminiumImage from '../images/block-7.jpg';

function Aluminium() {
  return (
    <div className='aliuminium'>
        <div className='aliuminium-left'>
            <h1>Aluminium. Crafted with precision.</h1>
        </div>
        <div className='aliuminium-right'>
            <img className='aliuminium-image' src={aluminiumImage} alt='product picture'></img>
        </div>
    </div>
  )
}

export default Aluminium