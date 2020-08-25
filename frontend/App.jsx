import React from 'react'
import TopNav from './TopNav.jsx'
import TopNavLoggedIn from './TopNavLoggedIn.jsx'
import Admin from './Admin.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Footer from './Footer.jsx'
import Homepage from './Homepage.jsx'
import Rooms from './Rooms.jsx'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import BookingPage from './BookingPage.jsx'
import fire from './config/Fire.js'


export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      user: {},
    }
  }
  
  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    });
  }

    render(){
      return(
        <div className="App">
          {this.state.user ?
            (<div> 
              <div className="main-container">
                <BrowserRouter>
                  <TopNavLoggedIn></TopNavLoggedIn>
                    <br/>
                    <div className="row">
                      <div className="col-md-1"></div>
                      <div className="col-md-10">
                        <div style={{fontSize: '22px', fontWeight: 'bold'}}>
                          Welcome, User!
                          {/* <button style={{marginLeft: '50px'}} className="btn btn-primary" 
                            onClick={this.logout.bind(this)}
                            id="crud-button-2">
                              Log out
                          </button> */}
                        </div>
                      </div>
                      <div className="col-md-1"></div>
                    </div>
                  <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/Home" component={Homepage} />
                    <Route path="/Rooms" component={Rooms} />
                    <Route path="/BookingPage/:roomId" component={BookingPage} />
                  </Switch>
                  <Footer></Footer>
                </BrowserRouter>
              </div>
            </div>)
          :
            (<div>
              <div className="main-container">
                <BrowserRouter>
                  <TopNav></TopNav>
                    <br/>
                    <div className="row">
                      <div className="col-md-1"></div>
                      <div className="col-md-10">
                        <div style={{fontSize: '22px', fontWeight: 'bold'}}>
                          Welcome, Guest!
                        </div>
                      </div>
                      <div className="col-md-1"></div>
                    </div>
                  <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Register" component={Register} />
                    <Route path="/Home" component={Homepage} />
                    <Route path="/Rooms" component={Rooms} />
                    <Route path="/BookingPage/:roomId" component={BookingPage} />
                  </Switch>
                  <Footer></Footer>
                </BrowserRouter>
              </div>
            </div>)
          }
        </div>
              
            
        )
    }
}