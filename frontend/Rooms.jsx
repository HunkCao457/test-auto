import React from 'react'

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

var colCentered = {
    float: 'none',
    margin: '0 auto'
}

/* Make the button bold */
var book_button = {
    fontWeight: 'bold',
    width: '75px',
    float: 'none',
    margin: '0 auto',
    fontSize: '18px',
    backgroundColor: 'goldenrod',
    color: 'black'
}

function hoverButtonColorOn(e) {
    e.target.style.background = '#c4941c';
}

function hoverButtonColorOff(e) {
    e.target.style.background = 'goldenrod';
}

export default class Rooms extends React.Component{
 
    constructor(){
        super()
        this.state = {
            rooms: [],
            // roomtypes: [],
            id: "",
            // type: {},
            number: "",
            wifi: "",
            smoking: "",
            floor: "",
            // name: ""
        }
    }

    fetchRooms() {
        var url = 'http://localhost:8080/rooms/all'
        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({ rooms: json }))
            // .then(console.log(this.state.rooms))
    }

    fetchRoomTypes() {
        var url = 'http://localhost:8080/roomtypes/all'
        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({ roomtypes: json }))
            // .then(console.log(this.state.roomtypes))
    }

    componentDidMount() {
        this.fetchRooms()
        // this.fetchRoomTypes()
    }

    handleChange(e) {
        var obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }
 
    render(){
        return(
        <div className="container">
            <br/>
            <div className="row">
                <br/>
                <h2 style={colCentered}>Choose a room</h2>
                <br/>
                <br/>
            </div>
            <div className="row">
                <br/>
                <table className="table table-hover table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Room number</th>
                            <th>Floor</th>
                            <th>Type</th>
                            <th>Wifi</th>
                            <th>Smoking</th>
                            <th>Booking</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.rooms.map(r =>
                            <tr>
                                <td>{r.number}</td>
                                <td>{r.floor}</td>
                                <td>
                                    {r.type.name}
                                </td>
                                <td>{r.wifi}</td>
                                <td>{r.smoking}</td>
                                <td>
                                <Link to={"/BookingPage/" + r.id}>
                                    <button className="btn btn-primary" 
                                    onMouseOver={hoverButtonColorOn} onMouseOut={hoverButtonColorOff} 
                                    style={book_button} title="Book this room">
                                        Book
                                    </button>
                                </Link>
                                </td>
                                {/* if not booked, put "Book" button
                                    if booked, put "Booked" */}
                            </tr>
                        )}
                    </tbody>
                </table>
                <br/>
                
            </div>
            
            
        </div>
       
        )
    }
 
}