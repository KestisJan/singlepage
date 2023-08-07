import React from 'react'
import MoodIcon from '@mui/icons-material/Mood';
import PaidIcon from '@mui/icons-material/Paid';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LockIcon from '@mui/icons-material/Lock';

function Iconbar() {
  return (
    <div className='icon-bar'>
        <div className='cool'>
            <MoodIcon/>
            <h3>Cool</h3>
        </div>
        <div className='affordable'>

        </div>
    </div>
  )
}

export default Iconbar