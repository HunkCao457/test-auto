import React from 'react'

var colCentered = {
    float: 'none',
    margin: '0 auto'
}

/* Make the button bold */
var book_button = {
    fontWeight: 'bold',
    width: '300px',
    float: 'none',
    margin: '0 auto',
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

export default class BookingPage extends React.Component{
 
    constructor(){
        super()
        this.state = {
            bookings: [],
            // customeraccounts: [],
            rooms: [],
            bookings: [],
            id: '',
            name: '',
            pass: '',
            email: '',
            room:'',
            roomId: '',
            roomType: '',
            request: '',
        }
    }

    // this.props.match.params.roomId

    fetchBookings() {
        var url = 'http://localhost:8080/bookings/all'
        fetch(url)
        .then(res=>res.json())
        .then(json=>
            this.setState({ bookings: json }) )
    }

    // fetchCustomerAccounts() {
    //     var url = 'http://localhost:8080/customeraccounts/all'
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(json=>
    //         this.setState({ customeraccounts: json }) )
    // }

    // fetchRooms() {
    //     var url = 'http://localhost:8080/rooms/all'
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(json=>
    //         this.setState({ rooms: json }) )
    // }

    componentDidMount() {
        this.fetchBookings()
        // this.fetchCustomerAccounts()
        // this.fetchRooms()
    }

    handleChange(e) {
        var obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }
    
    add() {
        var methodVar = 'post'
            var url = 'http://localhost:8080/bookings';
        fetch(url, {
            method: methodVar,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                password: this.state.password,
                phone: this.state.phone,
                email: this.state.email,
                room: {
                    id: this.props.match.params.roomId
                },
                request: this.state.request,
            })
        })
            .then(res => res.json())
            .then(json => this.fetchBookings())
    }
 
    render(){
        return(
        <div className="container">
            <br/>
            <h2>Booking form</h2>
            <br/>
            Full name:<input type='text' className="form-control" id='name' name='name' value={this.state.name}
            onChange={this.handleChange.bind(this)}/>
            <br/>
            Email:<input type='email' className="form-control" id='email' name='email' value={this.state.email}
              onChange={this.handleChange.bind(this)}/>
            <br/>
            Password:<input type='password' className="form-control" id='password' name='password' value={this.state.password}
              onChange={this.handleChange.bind(this)}/>
            <br/>
            Phone number:<input type='tel' className="form-control" id='phone' name='phone' value={this.state.phone}
              pattern = "[\d]{6,15}" title = "Phone number must include between 6-15 digits."
              onChange={this.handleChange.bind(this)}/>
            <br/>
            Other requests:<input type='text' className="form-control" id='request' name='request' value={this.state.request}
              onChange={this.handleChange.bind(this)}/>
            <br/>
            
            {/* Credit card number:<input type='tel' className="form-control" id='creditCard' name='creditCard' value={this.state.creditCard}
              pattern = "[\d]{16}" title = "Credit card number must include 16 digits."
              onChange={this.handleChange.bind(this)}/>
            <br/> */}
            <button className="btn btn-primary" onClick={this.add.bind(this)}
                    onMouseOver={hoverButtonColorOn} onMouseOut={hoverButtonColorOff} 
                    style={book_button} title="Confirm booking" >
                        Confirm booking
            </button>
            <br/>
            <br/>
        </div>
       
        )
    }
 
}