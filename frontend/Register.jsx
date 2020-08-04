import React from 'react'

var colCentered = {
    float: 'none',
    margin: '0 auto'
}

/* Make the "Register" button bold */
var register_button = {
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

export default class Register extends React.Component{
 
    constructor(){
        super()
        this.state = {
            // customerAccounts: [],
            id: '',
            name: '', 
            password: '',
            phone: '',
            email: '',
            creditCard: '',
        }
    }

    fetchCustomerAccounts() {
        var url = 'http://localhost:9000/api/customeraccounts'
        fetch(url)
        .then(res=>res.json())
        .then(json=>
            this.setState({ CustomerAccounts: json }) )
    }

    componentDidMount() {
        this.fetchCustomerAccounts()
    }

    handleChange(e) {
        var obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }
    
    register() {
        var methodVar = 'post'
            var url = 'http://localhost:9000/api/customeraccounts';
        fetch(url, {
            method: methodVar,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                name: this.state.name,
                password: this.state.password,
                phone: this.state.phone,
                email: this.state.email,
                creditCard: this.state.creditCard
            })
        })
            .then(res => res.json())
            .then(json => this.fetchCustomerAccounts())
    }
 
    render(){
        return(
        <div className="container">
            <br/>
            <h2>Register</h2>
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
            Credit card number:<input type='tel' className="form-control" id='creditCard' name='creditCard' value={this.state.creditCard}
              pattern = "[\d]{16}" title = "Credit card number must include 16 digits."
              onChange={this.handleChange.bind(this)}/>
            <br/>
            <button className="btn btn-primary" onClick={this.register.bind(this)}
                    onMouseOver={hoverButtonColorOn} onMouseOut={hoverButtonColorOff} 
                    style={register_button} title="Create a new account" >
                        Create a new account
                    </button>
        </div>
       
        )
    }
 
}