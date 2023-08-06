import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import './navbar.css';


function Navbar() {
  return (
    <div className='navbar'>
        <AppleIcon/>
        <AddIcon/>
        <EditIcon/>
    </div>
  )
}

export default Navbar