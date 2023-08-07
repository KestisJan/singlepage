import React from 'react'
import Logo from '../images/logo.svg';
import product1 from '../images/block-1-alt-2.jpg'
import '../Style/content.css';

function Content() {
  return (
    <div className='content'>
        <img className='logo' src={Logo} alt='logo'/>
        <h1>Our&nbsp;lightest product&nbsp;ever.</h1>
        <img className='bg' src={product1}/>
    </div>
  )
}

export default Content