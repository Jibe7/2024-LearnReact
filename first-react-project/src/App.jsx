import { useState } from "react";
import { Carre } from "./Carre.jsx";
import "./resetCSS.css";

function App() {
  const [ playerTurn, setPlayerTurn ] = useState("O");
  let [morpionG, setMorpionG ] = useState(Array.from(new Array(9), (el) => 0));
  let [isFinished, setIsFinished] = useState(false);

  let morpionGrid = Array.from(new Array(9), (el, index) => <li 
  style={{
    margin: "0",
    padding: "0"
  }}
  key={index}>< Carre playerTurn={playerTurn} setPlayer={setPlayerTurn} id={index} gridArray={morpionG} setGridArray={setMorpionG} isFinished={isFinished} setIsFinished={setIsFinished}  /></li>); 

  return (
  <>
  <div
  style={{
    backgroundColor: "black",
    width: "100vw",
    height: '100vh',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}
  >
    <ul 
    style={{
      backgroundColor: "blue",
      height: "300px",
      width: '300px',
      padding: "0",
      listStyleType: "none",
      display: "flex",
      flexFlow: "row",
      flexWrap: "wrap"
    }}>
      {morpionGrid}
    </ul>
    <h1 style={{
      marginLeft: "10vw",
      display: isFinished ? "inline" : "none",
      color: "white"
    }}>Result : Player {playerTurn} wins !</h1>
  </div>
  </>
  );
}

export default App;