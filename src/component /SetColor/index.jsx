import PurpleImg from "../../assets/icons/purple.png";
import RedImg from "../../assets/icons/red.png";
import GreenImg from "../../assets/icons/green.png";
import BlueImg from "../../assets/icons/blue.png";
import MagentaImg from "../../assets/icons/magenta.png";
import YellowImg from "../../assets/icons/yellow.png";

import {faSpinner, faCog} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SetColor() {
    const [theme, setTheme] = useState('#ffcc00');
    const [open, setOpen] = useState(false);

    const handleClick = (color) => {
        setTheme(color);
    };

    return (
        <div className="modal">
            <button onClick={()=> setOpen(true)} className="open-modal-btn">
               <FontAwesomeIcon icon={faCog} className="faIcon" />
            </button>

            {open && (
                <div className="overlay">
                    <svg height="30" viewBox="0 0 200 200" width="30" onClick={()=> setOpen(false)}>
                        <title/>
                        <path
                            d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>
                    </svg>
                    <h2>Choose color</h2>
                    <ul className="setColorFlex">
                        <li><img src={PurpleImg} alt="color" onClick={() => handleClick('purple')}/></li>
                        <li><img src={RedImg} alt="color" onClick={() => handleClick('red')}/></li>
                        <li><img src={GreenImg} alt="color" onClick={() => handleClick('green')}/></li>
                        <li><img src={BlueImg} alt="color" onClick={() => handleClick('blue')}/></li>
                        <li><img src={MagentaImg} alt="color" onClick={() => handleClick('magenta')}/></li>
                        <li><img src={YellowImg} alt="color" onClick={() => handleClick('#ffcc00')}/></li>
                    </ul>

                </div>
            )}
            <style>
                {`:root {
                    --yelov-color: ${theme};
                }`}
            </style>
        </div>
    );
}

export default SetColor;
