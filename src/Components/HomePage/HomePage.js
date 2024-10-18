import React from 'react';
import '../../App.css'
import PlayButton from './components/PlayButton';
import GameOptions from './components/GameOptions';
import Footer from './components/Footer';
import gameImg from '../../assests/gameImg.png'
import './homepage.css'
import { Link } from 'react-router-dom';
const HomePage = () => {
    return (
        <div className="connect4">


            <main>

                <div className='headingContainer'>
                    <header className='heading'>
                        Connect Four!
                    </header>

                    <p className="world">PlayWith Players around the worlds</p>

                </div>

                <div className="container">

                    <div className="buttonAndImg">
                        <div className="button">
                            <PlayButton />
                        </div>
                        <div className="picture">
                            <img className="image" src={gameImg} alt="" />
                        </div>
                    </div>
                    <div className="options">

                        <GameOptions />
                    </div>

                </div>





                <div className="border">
                    <div className="footers">
                        <Footer />
                    </div>

                </div>
            </main>

            <div className="blank">

            </div>
        </div>

    );
}

export default HomePage;
