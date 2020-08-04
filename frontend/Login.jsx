import React from 'react'

var colCentered = {
    float: 'none',
    margin: '0 auto'
}

/* Make the "Login" button bold */
var login_button = {
    fontWeight: 'bold',
    width: '150px',
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

export default class Login extends React.Component{
 
    constructor(){
        super()
        this.state = {username: '', password: ''}
    }
 
 
    changeHanlder(e){
        var obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }
 
    login(){
 
        var user = {username: this.state.username, password: this.state.password}
        fetch('http://localhost:3000/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.result == 'authenticated'){
                alert('Login successfully')
 
                window.sessionStorage.setItem('authenticated', 1)
 
                window.location.reload()
            }  
            else{
                alert('Wrong username and password')
                window.sessionStorage.setItem('authenticated', 0)
            }
        }
        )
       
    }
 
 
    render(){
        return(
        <div className="container">
            <br/>
            <h2>Log in</h2>
            <br/>
            Username:<input type='text' className="form-control" id='username' name='username' value={this.state.username}
            onChange={this.changeHanlder.bind(this)}/>
            <br/>
            Password:<input type='password' className="form-control" id='password' name='password' value={this.state.password}
              onChange={this.changeHanlder.bind(this)}/>
            <br/>
            <button className="btn btn-primary" onClick={this.login.bind(this)}
                    onMouseOver={hoverButtonColorOn} onMouseOut={hoverButtonColorOff} 
                    style={login_button} title="Sign in with your account" >
                        Log in
                    </button>
        </div>
       
        )
    }
 
}