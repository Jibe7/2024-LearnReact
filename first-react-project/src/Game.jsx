import { useState } from "react";
import './resetCSS.css';
import './ttts.css';
import './grid.css';

export default function Square({ value }) {
    return ( 
    <>
        <div className="grid-container">
            <aside></aside>
            <div className="grids">
                <div className="ttts">{value}</div>
                <div className="ttts">{value}</div>
                <div className="ttts">{value}</div>
                <div className="ttts">{value}</div>
                <div className="ttts">{value}</div>
                <div className="ttts">{value}</div>
                <div className="ttts">{value}</div>
                <div className="ttts">{value}</div>
                <div className="ttts">{value}</div>
            </div>
            <aside></aside>
        </div>
    </>
    )
}