import React from 'react'
import MoodIcon from '@mui/icons-material/Mood';
import PaidIcon from '@mui/icons-material/Paid';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LockIcon from '@mui/icons-material/Lock';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

function Iconbar() {
  return (
    <div className='icon-bar'>
        <div className='cool'>
            <MoodIcon/>
            <h3>Cool</h3>
        </div>
        <div className='affordable'>
            <PaidIcon/>
            <h3>Affordable</h3>
        </div>
        <div className='progressive'>
            <TrendingUpIcon/>
            <h3>Progressive</h3>
        </div>
        <div className='safe'>
            <LockIcon/>
            <h3>Safe</h3>
        </div>
        <div className='waterproof'>
            <WaterDropIcon/>
            <h3>Waterproof</h3>
        </div>
    </div>
  )
}

export default Iconbar