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

function Winner({ text }) {
    return (
        <>
            <h1>{text}</h1>
        </>
    )
}

export default function Grid() {
    const [squareValues, setsquareValues] = useState(Array(9).fill(""));
    const [playerTurn, setPlayerTurn] = useState(INITIALPLAYER);
    const [plays, setPlays] = useState(0);
    const [displayText, setDisplayText] = useState("");

    function playSquare(squareID) {
        if (squareValues[squareID] === "" && displayText === "") {
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
                    setDisplayText(`The Winner is: ${winner}`)
                    console.log(`Victory of player ${playerTurn}`)
                } else if (roundNumber === 9) {
                    setDisplayText(`This is a draw.`)
                    console.log("Draw")
                }
            }
        }
    }

    function reset() {
        setsquareValues(Array(9).fill(""))
        setPlays(0)
        setDisplayText("")
    }

    let squares = []
    for (let i = 0; i<9; i++) {
        squares.push(<Square key={i} value={squareValues[i]} onClick={
            () => playSquare(i)
        }/>)
    }

    
    // Update the squares when the user click on them OK
    // Follow the current player variable OK
    // Check if one user has won or if the game finished in a draw OK
    // Display a reset button to reset the game OK
    // Reset the game OK
    
    return ( 
    <>
        <div className="grid-container">
            <aside>
                <button style={{
                    display: displayText!=="" ? "inline" : "none",
                    width:"min(15vh, 15vw)",
                    height:"min(8vh, 8vw)",
                    borderRadius:"10%",
                    border:"1px solid black",
                }}
                onClick={reset}    
                >Reset</button>
            </aside>
            <div className="grids">
                {squares}
            </div>
            <aside>
                <Winner text={displayText} />
            </aside>
        </div>
    </>
    )
}