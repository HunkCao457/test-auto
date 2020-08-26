import React from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import fire from './config/Fire'
import Modal from 'react-modal'

// Make stuff stay in center
var colCentered = {
  float: 'none',
  margin: '0 auto'
}

// Make the "Register" button bold
var register_button = {
  fontWeight: 'bold',
  width: '300px',
  float: 'none',
  margin: '25px auto',
  fontSize: '24px',
  backgroundColor: 'goldenrod',
  color: 'black'
}

// Change color when mouse hover over button
function hoverButtonColorOn(e) {
  e.target.style.background = '#c4941c';
}

// Change color when mouse stop hovering over button
function hoverButtonColorOff(e) {
  e.target.style.background = 'goldenrod';
}

const formValid = ({ formErrors, name, password, email, phone, creditCard }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  name === null && (valid = false);
  password === null && (valid = false);
  email === null && (valid = false);
  phone === null && (valid = false);
  creditCard === null && (valid = false);

  return valid;
}

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
const numbersRegex = RegExp(/^\d+$/)
export default class Register extends React.Component{
 
  constructor(){
    super()
    this.state = {
      customerAccounts: [],
      // id: '',
      name: '', 
      password: '',
      phone: '',
      email: '',
      creditCard: '',
      formErrors: {
        name: '', 
        password: '',
        phone: '',
        email: '',
        creditCard: '',
      },
      redirect: false, // if "redirect" is true, redirect to homepage
      showModal: false // if "showModal" is true, show error message 
    }
  }

  fetchCustomerAccounts() {
    var url = 'http://localhost:8080/customeraccounts/all'
    fetch(url)
    .then(res=>res.json())
    .then(json=>
      this.setState({ customerAccounts: json }) )
  }

  componentDidMount() {
    this.fetchCustomerAccounts()
  }

  // Detect errors in form in real time before submitting
  changeHandler(e){
    var obj = {}
    obj[e.target.name] = e.target.value
    this.setState(obj)

    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    // console.log("Name: ", name);
    // console.log("Value: ", value);

    switch (name) {
      case 'name':
        formErrors.name = 
          value.length < 100 && value.length > 4
            ? ""
            : "Name must include 4-100 characters";
        break;

      case 'email':
        formErrors.email = 
          emailRegex.test(value) && value.length > 0
            ? ""
            : "Invalid email address";
        break;

      case 'password':
        formErrors.password = 
          value.length < 21 && value.length > 7
            ? ""
            : "Password must include 8-20 characters";
        break;

      case 'phone':
        formErrors.phone = 
          numbersRegex.test(value) && value.length < 15 && value.length > 6
            ? ""
            : "Phone number must include 6-15 numbers from 0-9";
        break;

      case 'creditCard':
        formErrors.creditCard = 
          numbersRegex.test(value) && value.length == 16
            ? ""
            : "Credit card number must include 16 numbers from 0-9";
        break;
      default:
        break;
    }

    this.setState(
      { formErrors, [name]: value }, () => console.log(this.state)
    )
  }

  signup(e) {
    e.preventDefault();

    // check if form is valid after clicking button to submit
    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Full name: ${this.state.name}
        Email address: ${this.state.email}
        Password: ${this.state.password}
        Phone number: ${this.state.phone}
        Credit card number: ${this.state.creditCard}
      `)

      // Create account and add it to Firebase
      e.preventDefault();
      fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then( (u) => {
        this.setState({ redirect: true })
      })
      .catch((error) => {
        console.log(error);
      })

      // Add account data to postgres database
      var methodVar = 'post'
        var url = 'http://localhost:8080/customeraccounts';
      fetch(url, {
        method: methodVar,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Postman-Token': '<calculated when request is sent>',
          'Content-Length': '<calculated when request is sent>',
          'Host': '<calculated when request is sent>',
          'User-Agent': 'PostmanRuntime/7.26.2',
          'Accept-Encoding': 'gzip, deflate, br',
          'Connection': 'keep-alive'
        },
        body: JSON.stringify({
          name: this.state.name,
          password: this.state.password,
          phone: this.state.phone,
          email: this.state.email,
          creditCard: this.state.creditCard
        })
      })
      .then(res => res.json())
      .then(json => this.fetchCustomerAccounts())
      .then(console.log("account added"))
    } 
    else {
      console.log('ERROR - FORM INVALID');
      this.setState({ showModal: true })
    }
  }

  closeModal(){
    this.setState({showModal: false})
  }
 
  render(){
    const { formErrors } = this.state;

    if (this.state.redirect === true) {
      return (<Redirect to='/Home' />)  // if "redirect" is true, redirect to homepage
    } 
    else {
      return(
        <div className="col-md-6" style={colCentered}>
          <Modal isOpen={this.state.showModal}>
            <h4>Invalid credentials</h4>
            <button onClick={this.closeModal.bind(this)}>Close</button>
          </Modal>
          <br/>
          <h2>Register</h2>
          <br/>
          <form id="signup-form">

            <div className="input-field">
              <label htmlFor="signup-name">Full name:</label>
              <input type="text" id="signup-name" className="form-control" formNoValidate
              name="name" value={this.state.name} placeholder="Enter full name"
              onChange={this.changeHandler.bind(this)}/>

              {this.state.formErrors.name.length > 0 && (
                <span className="errorMessage" style={{color:"red"}}>{this.state.formErrors.name}</span>
              )}
            </div>
            <br/>
            <div className="input-field">
              <label htmlFor="signup-email">Email address:</label>
              <input type="email" id="signup-email" className="form-control" formNoValidate
              name="email" value={this.state.email} placeholder="Enter email address"
              onChange={this.changeHandler.bind(this)}/>

              {this.state.formErrors.email.length > 0 && (
                <span className="errorMessage" style={{color:"red"}}>{this.state.formErrors.email}</span>
              )}
            </div>
            
            <br/>
            <div className="input-field">
              <label htmlFor="signup-password">Password:</label>
              <input type="password" id="signup-password" className="form-control" formNoValidate
              name="password" value={this.state.password} placeholder="Enter password"
              onChange={this.changeHandler.bind(this)}/>

              {this.state.formErrors.password.length > 0 && (
                <span className="errorMessage" style={{color:"red"}}>{this.state.formErrors.password}</span>
              )}
            </div>
            
            <br/>
            <div className="input-field">
              <label htmlFor="signup-phone">Phone number:</label>
              <input type="tel" id="signup-phone" className="form-control" formNoValidate
              name="phone" value={this.state.phone} placeholder="Enter phone number"
              onChange={this.changeHandler.bind(this)}/>

              {this.state.formErrors.phone.length > 0 && (
                <span className="errorMessage" style={{color:"red"}}>{this.state.formErrors.phone}</span>
              )}
            </div>
            
            <br/>
            <div className="input-field">
              <label htmlFor="signup-creditCard">Credit card number:</label>
              <input type="tel" id="signup-creditCard" className="form-control" formNoValidate
              name="creditCard" value={this.state.creditCard} placeholder="Enter credit card number"
              onChange={this.changeHandler.bind(this)}/>

              {this.state.formErrors.creditCard.length > 0 && (
                <span className="errorMessage" style={{color:"red"}}>{this.state.formErrors.creditCard}</span>
              )}
            </div>
            
            <br/>
            <button type="submit" className="btn btn-primary" 
              onClick={this.signup.bind(this)}
              onMouseOver={hoverButtonColorOn} onMouseOut={hoverButtonColorOff} 
              style={register_button} title="Create a new account">
                Create a new account
            </button>
          </form>
        </div>
        
      )
    }
  }
 
}