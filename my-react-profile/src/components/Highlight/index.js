import React, { useState, useEffect } from "react";
import "./style.css";

function Highlighter() {

    const triggers = document.querySelectorAll('h1');
    const highlight = document.createElement('span');
    highlight.classList.add('highlight');
    document.body.append(highlight);

    function highlightLink() {
        const linkCoords = this.getBoundingClientRect();
        console.log(linkCoords);
        const coords = {
            width: linkCoords.width,
            height: linkCoords.height,
            top: linkCoords.top + window.scrollY,
            left: linkCoords.left + window.scrollX
        };
        console.log(coords);

        highlight.style.width = `${coords.width}px`;
        highlight.style.height = `${coords.height}px`;
        highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    };

    triggers.forEach(h1 => h1.addEventListener('mouseenter', highlightLink))

    return (
        <div>
            <ul className='hlList'>
                <h1 style={{width: 'fit-content'}}> CSS </h1>
                <h1 style={{width: 'fit-content'}}> HTML </h1>
                <h1 style={{width: 'fit-content'}}> JavaScipt </h1>
            </ul> 
        </div>
    )
}

export default Highlighter;