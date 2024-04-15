import { useState } from "react";

export function Carre({ playerTurn, setPlayer }) {
    const [ drawState, setDrawState ] = useState("");

    function play() {
        if (drawState === "") {
            setDrawState(playerTurn);
            let p = playerTurn === "O" ? "X" : "O";
            setPlayer(p);
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