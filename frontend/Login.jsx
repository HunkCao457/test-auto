import React from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import fire from './config/Fire'
import Modal from 'react-modal'

// import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import 'react-toastify/scss/main.scss'

Modal.setAppElement('#app')

var colCentered = {
  float: 'none',
  margin: '0 auto'
}

/* Make the "Login" button bold */
var login_button = {
  fontWeight: 'bold',
  width: '150px',
  float: 'none',
  margin: '25px auto',
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

export default class Login extends React.Component{
 
  constructor(props){
    super(props)
    this.state = {
      email: '', 
      password: '',
      redirect: false, // if "redirect" is true, redirect to homepage
      showModal: false // if "showModal" is true, show error message 
    }
  }
 
  changeHandler(e){
    var obj = {}
    obj[e.target.name] = e.target.value
    this.setState(obj)
  }
 
  login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then( (u) => {
      this.setState({ redirect: true })
    })
    .catch((error) => {
      console.log(error);
      this.setState({ showModal: true })
    })
  }

  closeModal(){
    this.setState({showModal: false})
  }
 
  render(){
    if (this.state.redirect === true) {
      return (<Redirect to='/Home' />)  // if "redirect" is true, redirect to homepage
    } 
    else {
      return(
        <div className="col-md-6" style={colCentered}>
          <Modal isOpen={this.state.showModal} >
            <h4>Invalid email and/or password</h4>
            <button onClick={this.closeModal.bind(this)}>Close</button>
          </Modal>
          <br/>
          <h2>Log in</h2>
          <br/>
          <form>
            <div className="form-group">
              <label htmlFor="login-email">Email address: </label>
              <input type='email' className="form-control" id='login-email' 
                name='email' value={this.state.email} placeholder="Enter email address"
                onChange={this.changeHandler.bind(this)}/>
            </div>
            <div className="form-group">
              <label htmlFor="login-password">Password: </label>
              <input type='password' className="form-control" id='login-password' 
                name='password' value={this.state.password} placeholder="Enter password"
                onChange={this.changeHandler.bind(this)}/>
            </div>
            <button type="submit" className="btn btn-primary" 
              onClick={this.login.bind(this)}
              onMouseOver={hoverButtonColorOn} onMouseOut={hoverButtonColorOff} 
              style={login_button} title="Sign in with your account" >
                Log in
            </button>
          </form>
        </div>
        
      )
    }
  }
 
}