import React, { useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';

function Dropdown({ placeholderText, dropdownText }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked); // Toggle the state
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <span
                style={{
                    display: 'inline-block',
                    padding: '8px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    backgroundColor: "#134543",
                    width: 750, 
                    color : "white",
                    fontFamily : "sans-serif",
                    height : 50,
                    position: 'relative', // Add relative positioning
                    paddingRight: '40px' // Add space for the arrow icon
                }}
                onClick={handleClick}
            >
                {placeholderText}
                {/* Conditional rendering of arrow icon */}
                {isClicked ? <ArrowDropUp style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)' }} /> : <ArrowDropDown style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)' }} />}
            </span>
            {/* Dropdown content */}
            <span
                style={{
                    position: 'absolute',
                    top: isClicked ? '100%' : 0,
                    left: 0,
                    display: 'block',
                    backgroundColor: '#134543',
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    borderTop: 'none',
                    width: 780,
                    color : "white",
                    fontFamily : "sans-serif",
                    opacity: isClicked ? 1 : 0,
                    height: isClicked ? 'auto' : 0,
                    overflow: 'hidden',
                    transition: 'opacity 0.3s ease, height 0.3s ease, top 0.3s ease'
                }}
            >
                {dropdownText}
            </span>
        </div>
    );
}

export default Dropdown;