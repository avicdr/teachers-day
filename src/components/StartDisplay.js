import React from 'react'
import logo from "../resource/logo.png"
import { TypeAnimation } from 'react-type-animation';
import { NavLink } from 'react-router-dom';

function StartDisplay({setDisplay, display}) {
    return (
        display?<div>
        <div className='display-container flex-column'>
            <div className='logo-container'>
                <img src={logo} className='logo' />
            </div>
            <TypeAnimation
                sequence={[
                    'Welcome To Sapientia 2024',
                    1000
                ]}
                wrapper="div" // or any other suitable element
                speed={50}
                style={{ fontSize: '3em', display: 'inline-block' }}
                repeat={Infinity}
                className='welcome my-5'
            />
            <button className='next-btn my-5' onClick={()=>{setDisplay(!display)}}>
                See More →
            </button>
        </div>
    </div>:<></>
    )
}

export default StartDisplay;
