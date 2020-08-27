import React from 'react'

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

var colCentered = {
    float: 'none',
    margin: '25px auto'
}

/* Make the "Book a room" button bold */
var book_button = {
    fontWeight: 'bold',
    width: '200px',
    // margin: 'auto',
    fontSize: '24px',
    backgroundColor: 'goldenrod',
    color: 'black',
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
                <div className="row">
                    <h1 style={colCentered}>HOTELS & RESORTS</h1>
                </div>
                <div className="row">
                    {/* Indent */}
                    <div className="col-md-1"></div> 
                    <div className="col-md-10"> 
                        <br/>
                        <img src="Ritz-Carlton.jpg" style={{width:"100%"}} alt="pool-picture"></img>
                        <br/>
                    </div>
                    {/* Indent */}
                    <div className="col-md-1"></div> 
                </div>
                <br/>
                {/* <div className="row" >
                    <div style={colCentered}>
                        <Link to="/Rooms">
                            <button className="btn btn-primary" 
                            onMouseOver={hoverButtonColorOn} onMouseOut={hoverButtonColorOff} 
                            style={book_button} title="Reserve a room">
                                BOOK A ROOM
                            </button>
                        </Link>
                    </div>
                    <br/>
                </div> */}
                <div className="row">
                    <br/>
                    <h4 style={{margin: "auto", fontFamily: "Times New Roman, Times, serif", fontStyle: "italic"}}>
                        "Why stay at some cheap motel when you can pay $500 for a room you only use for one night?" - Marriott Carlton, Founder of The Shitz-Carlton
                    </h4>
                </div>
                
            </div>
        )
    }
}