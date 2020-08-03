import React from 'react'

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

var colCentered = {
    float: 'none',
    margin: '0 auto'
}

/* Make the "Book a room" button bold */
var book_button = {
    fontWeight: 'bold',
    width: '200px',
    margin: 'auto',
    fontSize: '24px',
    backgroundColor: 'goldenrod',
    color: 'black'
}

function hoverButtonColorOn(e) {
    e.target.style.background = '#c4941c';
}

function hoverButtonColorOff(e) {
    e.target.style.background = 'goldenrod';
}

export default class Homepage extends React.Component {

    render() {

        return (
            <div>
                <br/>
                <div className="row">
                    <h1 style={colCentered}>HOTELS & RESORTS</h1>
                </div>
                <div className="row">
                    <br/>
                    <img src="Ritz-Carlton.jpg" alt="pool-picture"></img>
                    <br/>
                </div>
                <div className="row">
                    <button href="BookingForm.jsx" className="btn btn-primary" 
                    onMouseOver={hoverButtonColorOn} onMouseOut={hoverButtonColorOff} 
                    style={book_button} title="Reserve a room">
                        BOOK A ROOM
                    </button>
                    <br/>
                </div>
                <div className="row">
                    <br/>
                    <br/>
                    <br/>
                    <h4 style={{margin: "auto", fontFamily: "Times New Roman, Times, serif", fontStyle: "italic"}}>
                        "Why stay at some cheap motel when you can pay $500 for a room you only use for one night?" - Marriott Carlton, Founder of The Shitz-Carlton
                    </h4>
                    <br/>
                </div>
                
            </div>
        )
    }
}