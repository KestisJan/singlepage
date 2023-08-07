import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <h5>This page wasn't made by KJ, Only used it to test my skills if I would be able to recreate it</h5>
        </div>
        <div className='footer-middle'>
            <h1>Made by Nicer</h1>
            <h6>(A parody of the good folks at Apple.)</h6>
            <div className='footer-link'>
                <TwitterIcon/>
                <h2>@nicerstudio</h2>
            </div>
        </div>
        <div className='footer-bottom'>
            <h3>If this made you chuckle, sign up to get an email when we make other cool stuff</h3>
            <input className='email' placeholder='Email address'></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Footer