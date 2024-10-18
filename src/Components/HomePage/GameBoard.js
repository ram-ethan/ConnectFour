// import React from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// import './gamebaoard.css'
// const GameBoard = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { objectData } = location.state || {};

//     // Initialize the board as a 7x6 grid with null values
//     const initialBoard = Array(6).fill(null).map(() => Array(7).fill(null));

//     // State to manage the board and turn
//     const [board, setBoard] = useState(initialBoard);
//     const [currentPlayer, setCurrentPlayer] = useState('player1'); // start with Player 1

//     const handleBack = () => {
//         navigate("/setup");
//     };

//     // Handle click to place a token
//     const handleClick = (colIndex) => {
//         const newBoard = [...board];


//         for (let row = newBoard.length - 1; row >= 0; row--) {
//             if (!newBoard[row][colIndex]) {
//                 newBoard[row][colIndex] = currentPlayer;
//                 break;
//             }
//         }

//         // Update the board state
//         setBoard(newBoard);

//         // Switch turns
//         setCurrentPlayer(currentPlayer === 'player1' ? 'player2' : 'player1');
//     };


//     return (
//         <div>
//             <div className="navbar">
//                 <div className="previous" onClick={handleBack} style={{ cursor: "pointer" }}>
//                     <h4>Go To Previous Page</h4>
//                 </div>
//                 <div className="headingss">
//                     Two Palyers Game
//                 </div>
//             </div>
//             <div className="mains">
//                 <div className="main2c">
//                     <div className="main3c">
//                         <div className="boaard">

//                             <div class="grid">


//                                 {board.map((row, rowIndex) => (
//                                     <div key={rowIndex} className="row">
//                                         {row.map((cell, colIndex) => (
//                                             <div
//                                                 key={colIndex}
//                                                 className="cell"
//                                                 onClick={() => handleClick(colIndex)} // Click to place token
//                                             >
//                                                 {/* Show image based on which player placed a token */}
//                                                 {cell && (
//                                                     <img
//                                                         src={cell === 'player1' ? 'player1_img_url' : 'player2_img_url'}
//                                                         alt={cell}
//                                                         className="token-image"
//                                                     />
//                                                 )}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 ))}







//                             </div>

//                         </div>
//                     </div>
//                     <div className="main4c">
//                         <div className="ment1">

//                             <h5>2 Games Tournament</h5>
//                             <h6>Playing Game 1</h6>
//                         </div>
//                         <div className="tournamanet">

//                             <div className="plays">
//                                 <div className="play1">
//                                     <div className="play1img">
//                                         <img src="" alt="" />
//                                     </div>
//                                     <div className="play1name">
//                                         <h6 className='ch4'>PLayer 1</h6>
//                                         <h6 className='ch5'>{objectData.player1}</h6>
//                                     </div>
//                                     <div className="play1score">
//                                         <h6 className='ch4'>Score</h6>
//                                         <h6 className='ch5'>0</h6>
//                                     </div>
//                                 </div>
//                                 <div className="play2">
//                                     <div className="play2img">
//                                         <img src="" alt="" />
//                                     </div>
//                                     <div className="play2name">
//                                         <h6 className='ch4'>PLayer 2</h6>
//                                         <h6 className='ch5'>{objectData.player2}</h6>
//                                     </div>
//                                     <div className="play2score">
//                                         <h6 className='ch4'>Score</h6>
//                                         <h6 className='ch5'>0</h6>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                         <div className='playbtnt'>
//                             <button className="undo">
//                                 Undo Step
//                             </button>
//                             <button className="end">
//                                 End Tournament
//                             </button>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default GameBoard

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './gamebaoard.css';


// const GameBoard = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { objectData } = location.state || {};

//     // Initialize the board as a 7x6 grid with null values
//     const initialBoard = Array(7).fill(null).map(() => Array(6).fill(null));

//     // State to manage the board, turn, and game status
//     const [board, setBoard] = useState(initialBoard);
//     const [currentPlayer, setCurrentPlayer] = useState('player1'); // Start with Player 1
//     const [winner, setWinner] = useState(null); // To store the winner
//     const [currentRound, setCurrentRound] = useState(1); // Track the current round
//     const [player1Score, setPlayer1Score] = useState(0); // Player 1 score
//     const [player2Score, setPlayer2Score] = useState(0); // Player 2 score

//     const handleBack = () => {
//         navigate("/setup");
//     };

//     // Function to check if there's a winner after a move
//     const checkWinner = (board, row, col, player) => {
//         return (
//             checkDirection(board, row, col, player, 1, 0) || // vertical
//             checkDirection(board, row, col, player, 0, 1) || // horizontal
//             checkDirection(board, row, col, player, 1, 1) || // diagonal down-right
//             checkDirection(board, row, col, player, 1, -1)   // diagonal down-left
//         );
//     };

//     // Function to check if there are 4 in a row in a given direction
//     const checkDirection = (board, row, col, player, rowDelta, colDelta) => {
//         let count = 0;
//         for (let i = -3; i <= 3; i++) {
//             const newRow = row + i * rowDelta;
//             const newCol = col + i * colDelta;
//             if (
//                 newRow >= 0 && newRow < board.length &&
//                 newCol >= 0 && newCol < board[0].length &&
//                 board[newRow][newCol] === player
//             ) {
//                 count++;
//                 if (count === 4) return true;
//             } else {
//                 count = 0;
//             }
//         }
//         return false;
//     };
//     const transposeBoard = (board) => {
//         console.log("sdf")
//         return board[0].map((_, colIndex) => board.map(row => row[colIndex]));
//     };

//     // Handle click to place a token
//     const handleClick = (colIndex, rowIndex) => {
//         if (winner) return; // Stop if there's already a winner

//         const newBoard = [...board];
//         let placed = false; // Track if a token was placed
//         console.log(rowIndex + 1, colIndex + 1)
//         // Fill the last row first for the selected column
//         for (let row = newBoard.length - 1; row >= 0; row--) {
//             if (!newBoard[row][colIndex]) { // Check if the cell is empty
//                 newBoard[row][colIndex] = currentPlayer; // Place the current player's token
//                 placed = true; // Mark that a token was placed
//                 console.log(row + 1, colIndex + 1)
//                 // Check for a winner after placing the token
//                 if (checkWinner(newBoard, row, colIndex, currentPlayer)) {
//                     setWinner(currentPlayer);
//                     updateScore(currentPlayer); // Update score when a player girl
//                 }
//                 break; // Stop after placing the token
//             }
//         }



//         // Update the board state only if a token was placed
//         if (placed) {

//             setBoard(newBoard);
//             if (!winner) {
//                 setCurrentPlayer(currentPlayer === 'player1' ? 'player2' : 'player1');
//             }
//         }
//     };

//     // Update score based on the winner
//     const updateScore = (player) => {
//         if (player === 'player1') {
//             setPlayer1Score(player1Score + 1);
//         } else {
//             setPlayer2Score(player2Score + 1);
//         }
//     };

//     // Reset the game for the next round
//     const resetGame = () => {
//         setBoard(initialBoard);
//         setWinner(null);
//         setCurrentPlayer('player1');
//         setCurrentRound(currentRound + 1);
//     };

//     // Handle the next round or finish the tournament
//     const handleNextRound = () => {
//         if (currentRound < objectData.game) {
//             resetGame(); // Start a new round
//         } else {
//             alert('Tournament over! Final scores:');
//         }
//     };

//     return (
//         <div>
//             <div className="navbar">
//                 <div className="previous" onClick={handleBack} style={{ cursor: "pointer" }}>
//                     <h4>Go To Previous Page</h4>
//                 </div>
//                 <div className="headingss">
//                     Two Players Game (Game {currentRound}/{objectData.game})
//                 </div>
//             </div>
//             <div className="mains">
//                 <div className="main2c">
//                     <div className="main3c">
//                         <div className="boaard" style={{ display: "flex", flexDirection: "column" }}>
//                             <div className="grid">
//                                 {board.map((row, rowIndex) => (
//                                     <div key={rowIndex} className="row">
//                                         {row.map((cell, colIndex) => (
//                                             <div
//                                                 key={colIndex}
//                                                 className="cell"
//                                                 onClick={() => handleClick(colIndex, rowIndex)} // Click to place token
//                                             >
//                                                 {/* Show image based on which player placed a token */}
//                                                 {cell && (
//                                                     <img
//                                                         src={cell === 'player1' ? boy : girl}
//                                                         alt={cell}
//                                                         className="token-image " style={{ width: "100%", height: "100%" }}
//                                                     />
//                                                 )}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="main4c">
//                         <div className="ment1">
//                             <h5>{objectData.game} Games Tournament</h5>
//                             <h6>Playing Game {currentRound}</h6>
//                         </div>
//                         <div className="tournament">
//                             {winner && (
//                                 <h2>{objectData[winner]} girl Game {currentRound}!</h2>
//                             )}
//                             <div className="plays">
//                                 <div className="play1">
//                                     <div className="play1img">
//                                         <img src={boy} alt="Player 1" />
//                                     </div>
//                                     <div className="play1name">
//                                         <h6 className='ch4'>Player 1</h6>
//                                         <h6 className='ch5'>{objectData.player1}</h6>
//                                     </div>
//                                     <div className="play1score">
//                                         <h6 className='ch4'>Score</h6>
//                                         <h6 className='ch5'>{player1Score}</h6>
//                                     </div>
//                                 </div>
//                                 <div className="play2">
//                                     <div className="play2img">
//                                         <img src={girl} alt="Player 2" />
//                                     </div>
//                                     <div className="play2name">
//                                         <h6 className='ch4'>Player 2</h6>
//                                         <h6 className='ch5'>{objectData.player2}</h6>
//                                     </div>
//                                     <div className="play2score">
//                                         <h6 className='ch4'>Score</h6>
//                                         <h6 className='ch5'>{player2Score}</h6>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='playbtnt'>
//                             {winner && (
//                                 <button className="next-round" onClick={handleNextRound}>
//                                     {currentRound < objectData.game ? 'Next Round' : 'Finish Tournament'}
//                                 </button>
//                             )}
//                             <button className="end" onClick={handleBack}>
//                                 End Tournament
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GameBoard;

// import './gamebaoard.css';
// import boy from '../../assests/boy.png'
// import girl from '../../assests/girl.png'


// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './gamebaoard.css';

// const GameBoard = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { objectData } = location.state || {};

//     // Initialize the board as a 6x7 grid with null values
//     const initialBoard = Array(6).fill(null).map(() => Array(7).fill(null));

//     // State to manage the board, turn, and game status
//     const [board, setBoard] = useState(initialBoard);
//     const [currentPlayer, setCurrentPlayer] = useState('player1'); // Start with Player 1
//     const [winner, setWinner] = useState(null); // To store the winner
//     const [currentRound, setCurrentRound] = useState(1); // Track the current round
//     const [player1Score, setPlayer1Score] = useState(0); // Player 1 score
//     const [player2Score, setPlayer2Score] = useState(0); // Player 2 score

//     const handleBack = () => {
//         navigate("/setup");
//     };

//     // Function to check if there's a winner after a move
//     const checkWinner = (board, row, col, player) => {
//         return (
//             checkDirection(board, row, col, player, 1, 0) || // vertical
//             checkDirection(board, row, col, player, 0, 1) || // horizontal
//             checkDirection(board, row, col, player, 1, 1) || // diagonal down-right
//             checkDirection(board, row, col, player, 1, -1)   // diagonal down-left
//         );
//     };

//     // Function to check if there are 4 in a row in a given direction
//     const checkDirection = (board, row, col, player, rowDelta, colDelta) => {
//         let count = 0;
//         for (let i = -3; i <= 3; i++) {
//             const newRow = row + i * rowDelta;
//             const newCol = col + i * colDelta;
//             if (
//                 newRow >= 0 && newRow < board.length &&
//                 newCol >= 0 && newCol < board[0].length &&
//                 board[newRow][newCol] === player
//             ) {
//                 count++;
//                 if (count === 4) return true;
//             } else {
//                 count = 0;
//             }
//         }
//         return false;
//     };

//     // Handle click to place a token
//     const handleClick = (colIndex) => {
//         if (winner) return; // Stop if there's already a winner

//         const newBoard = [...board];
//         let placed = false; // Track if a token was placed

//         // Fill the column from the bottom row upwards
//         for (let row = newBoard.length - 1; row >= 0; row--) {
//             if (!newBoard[row][colIndex]) { // Check if the cell is empty
//                 newBoard[row][colIndex] = currentPlayer; // Place the current player's token
//                 placed = true; // Mark that a token was placed

//                 // Check for a winner after placing the token
//                 if (checkWinner(newBoard, row, colIndex, currentPlayer)) {
//                     setWinner(currentPlayer);
//                     updateScore(currentPlayer); // Update score when a player girl
//                 }
//                 break; // Stop after placing the token
//             }
//         }

//         // Update the board state only if a token was placed
//         if (placed) {
//             setBoard(newBoard);
//             if (!winner) {
//                 setCurrentPlayer(currentPlayer === 'player1' ? 'player2' : 'player1');
//             }
//         }
//     };

//     // Update score based on the winner
//     const updateScore = (player) => {
//         if (player === 'player1') {
//             setPlayer1Score(player1Score + 1);
//         } else {
//             setPlayer2Score(player2Score + 1);
//         }
//     };

//     // Reset the game for the next round
//     const resetGame = () => {
//         setBoard(initialBoard);
//         setWinner(null);
//         setCurrentPlayer('player1');
//         setCurrentRound(currentRound + 1);
//     };

//     // Handle the next round or finish the tournament
//     const handleNextRound = () => {
//         if (currentRound < objectData.game) {
//             resetGame(); // Start a new round
//         } else {
//             alert('Tournament over! Final scores:');
//         }
//     };

//     return (
//         <div>
//             <div className="navbar">
//                 <div className="previous" onClick={handleBack} style={{ cursor: "pointer" }}>
//                     <h4>Go To Previous Page</h4>
//                 </div>
//                 <div className="headingss">
//                     Two Players Game (Game {currentRound}/{objectData.game})
//                 </div>
//             </div>
//             <div className="mains">
//                 <div className="main2c">
//                     <div className="main3c">
//                         <div className="boaard">
//                             <div className="grid">
//                                 {board[0].map((_, colIndex) => ( // Transpose here
//                                     <div key={colIndex} className="column">
//                                         {board.map((row, rowIndex) => (
//                                             <div
//                                                 key={rowIndex}
//                                                 className="cell"
//                                                 onClick={() => handleClick(colIndex)} // Click to place token
//                                             >
//                                                 {/* Show image based on which player placed a token */}
//                                                 {row[colIndex] && (
//                                                     <img
//                                                         src={row[colIndex] === 'player1' ? boy : girl}
//                                                         alt={row[colIndex]}
//                                                         className="token-image" style={{
//                                                             width: "100%", height: "100%"
//                                                         }}
//                                                     />
//                                                 )}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="main4c">
//                         <div className="ment1">
//                             <h5>{objectData.game} Games Tournament</h5>
//                             <h6>Playing Game {currentRound}</h6>
//                         </div>
//                         <div className="tournament">
//                             {winner && (
//                                 <h2>{objectData[winner]} girl Game {currentRound}!</h2>
//                             )}
//                             <div className="plays">
//                                 <div className="play1">
//                                     <div className="play1img">
//                                         <img src={boy} alt="Player 1" />
//                                     </div>
//                                     <div className="play1name">
//                                         <h6 className='ch4'>Player 1</h6>
//                                         <h6 className='ch5'>{objectData.player1}</h6>
//                                     </div>
//                                     <div className="play1score">
//                                         <h6 className='ch4'>Score</h6>
//                                         <h6 className='ch5'>{player1Score}</h6>
//                                     </div>
//                                 </div>
//                                 <div className="play2">
//                                     <div className="play2img">
//                                         <img src={girl} alt="Player 2" />
//                                     </div>
//                                     <div className="play2name">
//                                         <h6 className='ch4'>Player 2</h6>
//                                         <h6 className='ch5'>{objectData.player2}</h6>
//                                     </div>
//                                     <div className="play2score">
//                                         <h6 className='ch4'>Score</h6>
//                                         <h6 className='ch5'>{player2Score}</h6>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='playbtnt'>
//                             <button className="undo">
//                                 Undo Step
//                             </button>
//                             <button className="end" onClick={handleNextRound}>
//                                 End Round
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GameBoard;


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


