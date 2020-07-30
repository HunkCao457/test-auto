import React from 'react'
 
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
            <button className="btn btn-primary" id="crud-button-2" onClick={this.login.bind(this)}>Login</button>
        </div>
       
        )
    }
 
}