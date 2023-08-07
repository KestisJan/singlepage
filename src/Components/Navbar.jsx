import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import '../Style/navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <div className="navbar-left">
                <AppleIcon/>
                <h3>PLUG</h3>
            </div>
            <div className="navbar-right">
                <p>Vision</p>
                <p>Design</p>
                <p>Innovation</p>
                <button>Buy</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar