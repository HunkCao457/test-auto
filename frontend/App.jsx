import React from 'react'
import TopNav from './TopNav.jsx'
import TopNavAd from './TopNavAd.jsx'
import Admin from './Admin.jsx'
import Login from './Login.jsx'
import Footer from './Footer.jsx'
import Homepage from './Homepage.jsx'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'


export default class App extends React.Component{
    constructor(){
        super()
        this.state = {authenticated: 0}
      }
     
      componentWillMount(){
        this.setState({isAuthenticated: window.sessionStorage.getItem('authenticated')})
      }
     
      logout(){
        window.sessionStorage.setItem('authenticated', 0)
        this.setState({isAuthenticated: window.sessionStorage.getItem('authenticated')})
      }

    render(){
        return(
            <div>
                {window.sessionStorage.getItem('authenticated') == 1 ?
                <div>
                    <div className="main-container">
                        <BrowserRouter>
                            <TopNavAd></TopNavAd>
                            <br/>
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    <div style={{fontSize: '22px', fontWeight: 'bold'}}>
                                        Welcome, User!
                                        <button style={{marginLeft: '50px'}} className="btn btn-primary" id="crud-button-2" onClick={this.logout.bind(this)}>Logout</button>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <Switch>
                                <Route path="/Admin" component={Admin} />
                            </Switch>
                            <Footer></Footer>
                        </BrowserRouter>
                    </div>
                </div>  
                :
                <div>
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
                                <Route path="/" component={Homepage} />
                                <Route path="/Login" component={Login} />
                                <Route path="/Home" component={Homepage} />
                            </Switch>
                            {/* <Login></Login> */}
                            <Footer></Footer>
                        </BrowserRouter>
                    </div>
                </div>
                }
            </div>
              
            
        )
    }
}