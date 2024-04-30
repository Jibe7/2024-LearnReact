import { useState } from "react";
import './resetCSS.css';
import './ttts.css';
import './grid.css';
import testWinner from "./testWinner";

const INITIALPLAYER = "O";


function Square({ value, onClick }) {
    return ( 
    <>
        <div className="ttts" onClick={onClick}>{value}</div>
    </>
    )
}



export default function Grid() {
    const [squareValues, setsquareValues] = useState(Array(9).fill(""));
    const [playerTurn, setPlayerTurn] = useState(INITIALPLAYER);
    const [plays, setPlays] = useState(0);

    function playSquare(squareID) {
        console.log("Clicked")
        if (squareValues[squareID] === "") {
            let tmp = squareValues.slice();
            tmp[squareID] = playerTurn;
            setPlayerTurn(playerTurn === "O" ? "X" : "O");
            setsquareValues(tmp);
            let roundNumber = plays+1;
            setPlays(roundNumber)
            if (roundNumber >= 5) {
                let winner = testWinner(tmp, playerTurn);
                console.log(winner)
                if (winner) {
                    // Logic to handle victory
                    console.log(`Victory of player ${playerTurn}`)
                } else if (roundNumber === 9) {
                    // Logic to handle a draw
                    console.log("Draw")
                }
            }
        }
    }

    let squares = []
    for (let i = 0; i<9; i++) {
        squares.push(<Square key={i} value={squareValues[i]} onClick={
            () => playSquare(i)
        }/>)
    }

    
    // Update the squares when the user click on them OK
    // Follow the current player variable OK
    // Check if one user has won or if the game finished in a draw
    // Display a reset button to reset the game
    // Reset the game
    
    return ( 
    <>
        <div className="grid-container">
            <aside></aside>
            <div className="grids">
                {squares}
            </div>
            <aside></aside>
        </div>
    </>
    )
}