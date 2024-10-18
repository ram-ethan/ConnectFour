
import boy from '../../assests/boy.png';
import girl from '../../assests/girl.png';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './gamebaoard.css';
const GameBoard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { objectData } = location.state || {};
    const turn = objectData.turn;
    const initialBoard = Array(6).fill(null).map(() => Array(7).fill(null));
    const [tournamentResult, setTournamentResult] = useState(null); // New state for tournament result
    // const [lastRoundWinner, setLastRoundWinner] = useState(null);
    const [board, setBoard] = useState(initialBoard);

    const [winner, setWinner] = useState(null);
    const [currentRound, setCurrentRound] = useState(1);
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [history, setHistory] = useState([]);
    const [roundEnded, setRoundEnded] = useState(false);
    // New state to track if the round has ended

    const [currentPlayer, setCurrentPlayer] = useState(objectData.turn === 'Always Player 02' ? 'player2' : 'player1');
    const handleBack = () => {
        navigate("/setup");
    };

    const checkWinner = (board, row, col, player) => {
        return (
            checkDirection(board, row, col, player, 1, 0) ||
            checkDirection(board, row, col, player, 0, 1) ||
            checkDirection(board, row, col, player, 1, 1) ||
            checkDirection(board, row, col, player, 1, -1)
        );
    };

    const checkDirection = (board, row, col, player, rowDelta, colDelta) => {
        let count = 0;
        for (let i = -3; i <= 3; i++) {
            const newRow = row + i * rowDelta;
            const newCol = col + i * colDelta;
            if (
                newRow >= 0 && newRow < board.length &&
                newCol >= 0 && newCol < board[0].length &&
                board[newRow][newCol] === player
            ) {
                count++;
                if (count === 4) return true;
            } else {
                count = 0;
            }
        }
        return false;
    };

    const handleClick = (colIndex) => {
        console.log(objectData.turn);
        if (winner) { return };

        const newBoard = board.map(row => [...row]);
        let placed = false;

        for (let row = newBoard.length - 1; row >= 0; row--) {
            if (!newBoard[row][colIndex]) {
                newBoard[row][colIndex] = currentPlayer;
                placed = true;

                if (checkWinner(newBoard, row, colIndex, currentPlayer)) {
                    setWinner(currentPlayer);
                    const newPlayer1Score = currentPlayer === 'player1' ? player1Score + 1 : player1Score;
                    const newPlayer2Score = currentPlayer === 'player2' ? player2Score + 1 : player2Score;

                    // Update the scores before setting round end
                    setPlayer1Score(newPlayer1Score);
                    setPlayer2Score(newPlayer2Score);
                    setRoundEnded(true);

                    // Check if it's the final round and update the tournament result
                    if (currentRound === objectData.game) {
                        if (newPlayer1Score > newPlayer2Score) {
                            setTournamentResult(`${objectData.player1} wins Tournament`);
                        } else if (newPlayer2Score > newPlayer1Score) {
                            setTournamentResult(`${objectData.player2} wins Tournament `);
                        } else {
                            setTournamentResult(`Tournament Draws `);
                        }
                    }
                }

                setHistory((prevHistory) => [
                    ...prevHistory,
                    { board: newBoard.map(r => [...r]), player: currentPlayer, row, col: colIndex }
                ]);
                break;
            }
        }

        if (placed) {
            setBoard(newBoard);
            if (!winner) {
                setCurrentPlayer(currentPlayer === 'player1' ? 'player2' : 'player1');
            }
        }
    };



    // const updateScore = (player) => {
    //     if (player === 'player1') {
    //         setPlayer1Score(player1Score + 1);
    //     } else {
    //         setPlayer2Score(player2Score + 1);
    //     }
    // };


    const resetGame = () => {
        setBoard(initialBoard);
        // 

        setWinner(null);
        if (objectData.turn === "Winner First")
            setCurrentPlayer(winner);
        if (objectData.turn === "Always Player 01")
            setCurrentPlayer('player1');
        if (objectData.turn === "Always Player 02")
            setCurrentPlayer('player2');
        if (objectData.turn === "Loser first") {
            const pl = winner === 'player1' ? 'player2' : 'player1';
            setCurrentPlayer(pl);
        }
        if (objectData.turn === "Alternative first") {
            const pl = currentPlayer === 'player1' ? 'player2' : 'player1';
            setCurrentPlayer(pl);
        }


        setCurrentRound(currentRound + 1);
        setHistory([]);
        setRoundEnded(false);

        // Reset round-ended state for the next round
    };
    const handleNextRound = () => {
        if (currentRound < objectData.game) {
            resetGame();
        } else {
            console.log(tournamentResult)
            console.log(player1Score);
            console.log(player2Score);

            // Check the final score and update the tournament result
            if (player1Score > player2Score) {
                setTournamentResult(`${objectData.player1} wins tournament!`);
            } else if (player2Score > player1Score) {
                setTournamentResult(`${objectData.player2} wins tournament!`);
            } else {
                setTournamentResult("  Tournament draw!");
            }
        }
    };

    const handleUndo = () => {
        if (history.length === 0 || roundEnded) return;

        const lastMove = history[history.length - 1];

        const newBoard = board.map(row => [...row]);
        newBoard[lastMove.row][lastMove.col] = null;

        setBoard(newBoard);
        setCurrentPlayer(lastMove.player);
        setWinner(null);
        setHistory(history.slice(0, -1));
    };
    function handlePlayAgain() {
        navigate("/setup");
    }



    return (
        <div>
            <div className="navbar navs">
                <div className="previous" onClick={handleBack} style={{ cursor: "pointer" }}>
                    <h4>Go To Previous Page</h4>
                </div>
                <div className="headingss">
                    Two Players Game (Game {currentRound}/{objectData.game})
                </div>
            </div>
            <div className="mains">
                <div className="main2c">
                    <div className="main3c">
                        <div className="boaard">
                            <div className="grid">
                                {board[0].map((_, colIndex) => (
                                    <div key={colIndex} className="column">
                                        {board.map((row, rowIndex) => (
                                            <div
                                                key={rowIndex}
                                                className="cell"
                                                onClick={() => handleClick(colIndex)}
                                            >
                                                {row[colIndex] && (
                                                    <img
                                                        src={row[colIndex] === 'player1' ? boy : girl}
                                                        alt={row[colIndex]}
                                                        className="token-image"
                                                        style={{
                                                            backgroundColor: "white",
                                                            width: "85%",
                                                            height: "85%",
                                                            border: row[colIndex] === 'player2' ? '4px solid #FACE53' : '4px solid #2C9E46',
                                                            borderRadius: '50%'
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="main4c">
                        <div className="ment1">
                            <h5>{objectData.game} Games Tournament</h5>
                            {(!winner) && (<h6>Playing Game {currentRound}</h6>)}
                        </div>
                        <div className="tournament">
                            {winner && (tournamentResult === null) && (
                                <h2 className='tent1' style={{

                                }}>{objectData[winner]} Wins Game {currentRound}!</h2>


                            )}
                            <div>{tournamentResult && (
                                <h4 className="tournament-result">{tournamentResult}</h4>
                            )}
                            </div>

                            <div className="plays">
                                <div className="play1">
                                    <div className="play1img" style={{
                                        border: currentPlayer === 'player1' ? '4px solid #D99A24' : 'none',
                                        borderRadius: currentPlayer === 'player1' ? '50%' : '0px'
                                    }}>
                                        <img src={boy} alt="Player 1" style={{ borderRadius: "50%", border: "4px solid #2C9E46" }} />
                                    </div>
                                    <div className="play1name">
                                        <h6 className='ch4'>Player 1</h6>
                                        <h6 className='ch5'>{objectData.player1}</h6>
                                    </div>
                                    <div className="play1score">
                                        <h6 className='ch4'>Score</h6>
                                        <h6 className='ch5'>{player1Score}</h6>
                                    </div>
                                </div>
                                <div className="play2">
                                    <div className="play2img" style={{
                                        border: currentPlayer === 'player2' ? '4px solid #D99A24' : 'none',
                                        borderRadius: currentPlayer === 'player2' ? '50%' : '0px'
                                    }}>
                                        <img src={girl} alt="Player 2" style={{ borderRadius: "50%", border: "4px solid #FACE53" }} />
                                    </div>
                                    <div className="play2name">
                                        <h6 className='ch4'>Player 2</h6>
                                        <h6 className='ch5'>{objectData.player2}</h6>
                                    </div>
                                    <div className="play2score">
                                        <h6 className='ch4'>Score</h6>
                                        <h6 className='ch5'>{player2Score}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='playbtnt'>
                            {roundEnded ? (
                                <button className="next-round undo" onClick={handleNextRound} style={{ display: currentRound < objectData.game ? "" : "none" }}>
                                    Next Round
                                </button>
                            ) : (
                                <button className="undo" onClick={handleUndo}>
                                    Undo Step
                                </button>
                            )}
                            {(tournamentResult === null) && (<button className="end" onClick={handleNextRound}>
                                End Round
                            </button>)}
                            {tournamentResult && (<button className="end" onClick={handlePlayAgain}>
                                Play Again
                            </button>)}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameBoard;


