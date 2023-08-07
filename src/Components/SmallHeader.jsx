import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import '../Style/smallheader.css';


function smallHeader() {
  return (
    <div className='s-header'>
        <AppleIcon/>
        <AddIcon/>
        <EditIcon/>
    </div>
  )
}

export default smallHeader