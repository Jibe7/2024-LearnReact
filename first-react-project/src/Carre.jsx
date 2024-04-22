import { useState } from "react";

export function Carre({ playerTurn, setPlayer, id, gridArray, setGridArray, isFinished, setIsFinished }) {
    const [ drawState, setDrawState ] = useState("");

    const verifyGrid = function(arr) {
        let cnt = 0;
        arr.forEach((e) => (e === playerTurn) ? cnt++ : undefined)
        if (cnt < 3) {return false}
        cnt = 0;
        for (let i = 0; i < 9; i++) {
            if (i % 3 === 0) {
                if (cnt === 3) {
                    console.log("The lines")
                    return true;
                }
                cnt=0;
            }
            if (arr[i] === playerTurn) {
                cnt++;
            } else {
                continue;
            }
        }
        cnt=0
        for (let i = 0; i < 9; i++) {
            if (i % 3 === 0) {
                if (cnt === 3) {
                    console.log("The columns")
                    return true;
                }
                cnt=0;
            }
            if (arr[Math.floor(i/3)+(i%3)*3] === playerTurn) {
                cnt++;
            } else {
                continue;
            }
        }
        let diag1 = true;
        let diag2 = true;
        for (let j = 0; j <3; j++) {
            if (arr[j*4]!==playerTurn || arr[j*4]===0) {
                diag1 = false;
            }
            if (arr[(j+1)*2]!==playerTurn || arr[(j+1)*2]===0) {
                diag2 = false;
            }
        }
        return diag1 || diag2
    }

    function play() {
        if (drawState === "" && !isFinished) {
            setDrawState(playerTurn);
            console.log(gridArray) 
            let grid = Array.from(gridArray);
            grid[id]=playerTurn;
            setGridArray(grid)
            let p = playerTurn === "O" ? "X" : "O";
            let b = verifyGrid(grid);
            console.log(b)
            b ? setIsFinished(b) : setPlayer(p);
        }
    }

    return (
        <>
            <div 
            style={{
            backgroundColor: '#2ecc71',
            border: "1px solid black",
            width:"100px",
            height:"100px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "80px"
            }}
            onClick={play}
            >
                {drawState}
            </div>
        </>
    );
}