import { useState } from "react";
import { Carre } from "./Carre.jsx";

function App() {
  const [ playerTurn, setPlayerTurn ] = useState("O");
   
  // setPlayerTurn("O");

  let morpionGrid = Array.from(new Array(9), (el, index) => <li 
  style={{
    margin: "0",
    padding: "0"
  }}
  key={index}>< Carre playerTurn={playerTurn} setPlayer={setPlayerTurn} /></li>); 

  return (
  <>
  <div
  style={{
    width: "100vw",
    height: '100vh',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}
  >
    <ul style={{
      backgroundColor: "blue",
      height: "306px",
      width: '306px',
      padding: "0",
      listStyleType: "none",
      display: "flex",
      flexFlow: "row",
      flexWrap: "wrap"
    }}>
      {morpionGrid}
    </ul>
  </div>
  </>
  );
}

export default App;