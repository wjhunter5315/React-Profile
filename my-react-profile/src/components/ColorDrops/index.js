import React from "react";
import './style.scss';

function ColorDrops() {
    return (
        <div className="wrap">
            {/* <% 144.times do %> */}
                
                <div className="c" />
                <div className="c" />
                <div className="c" />
                <div className="c" />
                <div className="c" />
                <div className="c" />
                <div className="c" />
                <div className="c" />
                <div className="c" />
                <div className="c" />
                <div className="c" />
                <div className="c" />
                <div className="c" />
                <div className="c" />
            {/* <% end %> */}
        </div>
    )
}

export default ColorDrops;


// BROKEN ATTEMPT AT A RENDERED ELEMENT LOOP
// export default class ColorDrops extends React.Component {
//     createDrops = () => {
//         let dropsBar = [];
//         for (let i = 0; i < 2; i++) {
//             let children = []
//             for (let j = 0; j < 10; i++) {
//                 children.push(<div className="c">{{}}</div>)
//             }
//             dropsBar.push(<div className="wrap">{{children}}</div>)
//         }
//         return dropsBar
//     };

//     render() {
//         return (
//             <dropsBar>
//                 {this.createDrops()}
//             </dropsBar>
//         )
//     }
// }