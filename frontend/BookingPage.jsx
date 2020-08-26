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
            
            id: '',
            name: '',
            pass: '',
            email: '',
            phone: '',
            request: '',
            rooms: {},
            roomTypeId: '',
            roomTypeName: '',
            number: '',
            wifi: '',
            somoking: '',
            floor: ''
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

    

    fetchRooms() {
        var url = 'http://localhost:8080/rooms/'
        fetch(url + this.props.match.params.roomId)
        .then(res=>res.json())
        .then(json=> this.setState({ rooms: json }) )
    }

    componentDidMount() {
        this.fetchBookings()
        // this.fetchCustomerAccounts()
        this.fetchRooms()
    }

    handleChange(e) {
        var obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }
    
    addBooking() {
        // POST new booking data

        var methodVar = 'post'
            var url = 'http://localhost:8080/bookings';
        fetch(url, {
            method: methodVar,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // 'Access-Control-Allow-Origin': 'http://localhost:8080',
                // 'Access-Control-Allow-Credentials': 'true',
                // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
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
        
        // update (PUT) room status (booked: true)

        var methodVar2 = 'put'
            var url2 = 'http://localhost:8080/rooms';
        fetch(url2, {
            method: methodVar2,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // 'Access-Control-Allow-Origin': 'http://localhost:8080',
                // 'Access-Control-Allow-Credentials': 'true',
                // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
            },
            body: JSON.stringify({
                id: this.props.match.params.roomId,
                type: {
                    id: this.state.rooms.type.id,
                    name: this.state.rooms.type.name
                },
                number: this.state.rooms.number,
                wifi: this.state.rooms.wifi,
                smoking: this.state.rooms.smoking,
                floor: this.state.rooms.floor,
                booked: true
            })
        })
            .then(res => res.json())
            .then(json => this.fetchRooms())
    }
 
    render(){
        return(
        <div className="container">
            <br/>
            <h2>Booking form</h2>
            <br/>
            Full name:<input type='text' className="form-control" id='name' name='name' value={this.state.name} required
            onChange={this.handleChange.bind(this)}/>
            <br/>
            Email:<input type='email' className="form-control" id='email' name='email' value={this.state.email} required
              onChange={this.handleChange.bind(this)}/>
            <br/>
            Password:<input type='password' className="form-control" id='password' name='password' value={this.state.password} required
              onChange={this.handleChange.bind(this)}/>
            <br/>
            Phone number:<input type='tel' className="form-control" id='phone' name='phone' value={this.state.phone} required
              pattern = "[\d]{6,15}" 
              title = "Phone number must include between 6-15 digits."
              onChange={this.handleChange.bind(this)}/>
            <br/>
            Other requests:<input type='text' className="form-control" id='request' name='request' value={this.state.request} required
              onChange={this.handleChange.bind(this)}/>
            <br/>
            
            {/* Credit card number:<input type='tel' className="form-control" id='creditCard' name='creditCard' value={this.state.creditCard}
              pattern = "[\d]{16}" title = "Credit card number must include 16 digits."
              onChange={this.handleChange.bind(this)}/>
            <br/> */}
            <button className="btn btn-primary" 
                    onClick={this.addBooking.bind(this)}
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