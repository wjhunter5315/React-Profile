import React, { createElement, useState, useEffect } from "react";

const hoverEl = document.querySelectorAll('a');
const isHover = false;

function HoverBox() {
    const [hoverState, setHoverState] = useState(isHover);

    function hoverEffect(e) {
        e.preventDefault();
        setHoverState(hoverEl.highlight)
    };
        
    return (
        <div className='container'>
            <div id='highlightSpot' />
            <ul className='test-list'>
                <li className='test-item'>
                    <a className='test-anchor'
                        href=""
                        onMouseOver={hoverEffect}
                        >HOVER HERE</a>
                </li>
            </ul>
        </div>
    );
};

export default HoverBox;