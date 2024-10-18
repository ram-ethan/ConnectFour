import React from 'react';
import '../../../App.css'
import online from '../../../assests/online.png'
import person from '../../../assests/person.png'
import two_person from '../../../assests/two-persons.png'
import brain from '../../../assests/brain.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function GameOptions() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/setup"); // Navigates to the setup page
    };


    return (
        <div className="game-options">
            <div className="option disabled a">
                <div className="option-label">
                    <div className="second">
                        <img src={person} alt="" />
                    </div>
                    <div className="first">Custom Game</div>
                </div>
                <div className="status">Coming Soon</div>
            </div>

            <div className="option abled " onClick={handleClick}>

                <div className="option-label">
                    <div className="second">
                        <img src={two_person} alt="" />
                    </div>
                    <div className="first " >Two Playes</div></div>
                {/* <div className="status">Available</div> */}

            </div>

            <div className="option disabled c">
                <div className="option-label">
                    <div className="second">
                        <img src={online} alt="" />
                    </div>
                    <div className="first">Game Online</div></div>
                <div className="status">Coming Soon</div>
            </div>
            <div className="option disabled d">
                <div className="option-label">
                    <div className="second">
                        <img src={brain} alt="" />
                    </div>
                    <div className="first">Training Game</div>
                </div>
                <div className="status">Coming Soon</div>
            </div>
        </div>
    );
}

export default GameOptions;
