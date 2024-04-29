import React from 'react'
import ReactDOM from 'react-dom/client'
import Square from './Game.jsx'
import './resetCSS.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Square value="Hello" />
  </React.StrictMode>,
)