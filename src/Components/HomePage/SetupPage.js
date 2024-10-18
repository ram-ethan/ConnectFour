import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './setuppage.css'
import cup from '../../assests/cup.png'
import boy from '../../assests/boy.png'
import girl from '../../assests/girl.png'
import run from '../../assests/run.png'
import Choices from './components/Choices'
const SetupPage = () => {
    const navigation = useNavigate();
    const [name1, setname1] = useState("Player1");
    const [name2, setname2] = useState("Player2");

    const [sname, setname] = useState("");
    const [disable, setdisable] = useState({
        one: false,
        two: false,
        three: false,
        four: false

    });

    const [game, setGame] = useState("5");


    const handleClick = () => {
        navigation("/");
    };
    const [selectedOption, setSelectedOption] = useState("Winner"); // State to track the selected option

    const options = [
        { id: 'Alternative', name: 'Alternate Turn' },
        { id: 'Loser First', name: 'Looser First ' },
        { id: 'Winner First', name: 'Winner First ' },
        { id: 'Always Player 01', name: 'Always Player 01' },
        { id: 'Always Player 02', name: 'Always Player 02' },
    ];
    const gameOptions = [
        { id: 2, name: '2 Games' },
        { id: 3, name: '3 Games' },
        { id: 4, name: '4 Games' },
        { id: 5, name: '5 Games' },

    ];
    const navigate = useNavigate();



    const handleOptionClick = (id) => {
        setSelectedOption(id); // Update the selected option
    };
    const handleGame = (id) => {
        setGame(id); // Update the selected option
    };
    const handleSubmit = () => {
        const obj = {
            player1: name1,
            player2: name2,
            game: game,
            turn: selectedOption,
            oneImg: boy,
            twoImg: girl

        }
        navigate("/setup/game", { state: { objectData: obj } });
    }

    return (
        <div>
            <div className="navbar">
                <div className="previous" onClick={handleClick} style={{ cursor: "pointer" }}>
                    <h4>Go To Previous Page</h4>
                </div>
                <div className="headingss">
                    Two Palyers Game
                </div>
            </div>
            <div className="mains">
                <div className="container1">
                    <div className="choices">
                        <div style={{ cursor: "pointer" }} onClick={() => setdisable(prevState => ({ ...prevState, one: true }))}>  <Choices image={boy} content={"Player1"} name={name1} bcolor={"#409862"} bg={"#D8F5E3"} />
                        </div>
                        <div style={{ cursor: "pointer" }} onClick={() => setdisable(prevState => ({ ...prevState, two: true }))}>
                            <Choices image={girl} content={"Player2"} name={name2} bcolor={"#DDCB54"} bg={"#F6ECCE"} />
                        </div>
                        <div style={{ cursor: "pointer" }} onClick={() => setdisable(prevState => ({ ...prevState, three: true }))}>
                            <Choices image={cup} content={"Number of games"} name={game + " Games"} bcolor={"#A9BBF2"} bg={"#EEF0FE"} />
                        </div>
                        <div style={{ cursor: "pointer" }} onClick={() => setdisable(prevState => ({ ...prevState, four: true }))}>
                            <Choices image={run} content={"Who Starts"} name={selectedOption} bcolor={"#3E8A5B"} bg={"#D8F4E0"} />
                        </div>
                    </div>
                    <div className="startGame" onClick={handleSubmit}>
                        Start Game
                    </div>
                </div>
            </div>
            {console.log(disable.one)}
            {disable.one && (<>
                <div className='overlay'></div>
                <div className="contain1">

                    <div className='contain12'>
                        <h3 className='play1'>
                            Set Player 1 Name

                        </h3>
                        <div>
                            <input className='input' type="text" value={sname} onChange={(e) => {
                                setname(e.target.value)
                            }} />
                        </div>

                        <button className="setname" onClick={() => {
                            if (sname.trim() !== "") {
                                setname1(sname);
                                setname("");
                                setdisable(prevState => ({ ...prevState, one: false }))
                            }
                        }}>
                            Set Name
                        </button>
                    </div>
                </div>
            </>)}
            {disable.two && (<>
                <div className='overlay'></div>
                <div className="contain1">

                    <div className='contain12'>
                        <h3 className='play1'>
                            Set Player 2 Name

                        </h3>
                        <div>
                            <input className='input' type="text" value={sname} onChange={(e) => {
                                setname(e.target.value)
                            }} />
                        </div>

                        <button className="setname" onClick={() => {
                            if (sname.trim() !== "") {
                                setname2(sname);
                                setname("");
                                setdisable(prevState => ({ ...prevState, two: false }))
                            }
                        }}>
                            Set Name
                        </button>
                    </div>
                </div>
            </>)}
            {disable.four && (<>
                <div className='overlay'></div>
                <div className="contain1 who">

                    <div className='contain12'>
                        <h3 className='play1'>
                            Who Starts

                        </h3>
                        <div className="lists">
                            <div className="option-container">
                                {options.map((option) => (
                                    <div key={option.id} className="option-button" onClick={() => handleOptionClick(option.id)}>
                                        <input
                                            type="radio"
                                            name="options"
                                            checked={selectedOption === option.id}
                                            readOnly
                                        />
                                        <span style={{ paddingLeft: "20px" }}>{option.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='openClose'>
                            <button className="setname close" onClick={() => {

                                setdisable(prevState => ({ ...prevState, four: false }))

                            }}>
                                CANCEL
                            </button>
                            <button className="setname open" onClick={() => {

                                setdisable(prevState => ({ ...prevState, four: false }))

                            }}>
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </>)
            }

            {disable.three && (<>
                <div className='overlay'></div>
                <div className="contain1 who">

                    <div className='contain12'>
                        <h3 className='play1'>
                            Who Starts

                        </h3>
                        <div className="lists">
                            <div className="option-container">
                                {gameOptions.map((option) => (
                                    <div key={option.id} className="option-button" onClick={() => handleGame(option.id)}>
                                        <input
                                            type="radio"
                                            name="options"
                                            checked={game === option.id}
                                            readOnly
                                        />
                                        <span style={{ paddingLeft: "20px" }}>{option.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='openClose'>
                            <button className="setname close" onClick={() => {

                                setdisable(prevState => ({ ...prevState, three: false }))

                            }}>
                                CANCEL
                            </button>
                            <button className="setname open" onClick={() => {

                                setdisable(prevState => ({ ...prevState, three: false }))

                            }}>
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </>)
            }

        </div >
    )
}

export default SetupPage
