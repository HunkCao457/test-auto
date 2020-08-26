import React from 'react'
import Admin from './Admin.jsx'
import Homepage from './Homepage.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import { Link } from 'react-router-dom'

/* Add an goldenrod background color to the top navigation bar */
var topnav = {
  overflow: 'hidden',
  backgroundColor: 'goldenrod',
  color: 'white'
}

/* Style the links (Logo) inside the navigation bar */
var topnav_a = {
  float: 'left',
  display: 'block',
  paddingTop: '5px',
  paddingBottom: '5px',
  paddingLeft: '0px',
  paddingRight: '5px'
}

/* Style the links (Product types) inside the navigation bar*/

/* Style "Sign in" button in homepage*/
var topnav_button = {
  display: 'block',
  color: 'black',
  textAlign: 'center',
  padding: '17px 16px',
  float: 'right',
  textDecoration: 'none',
  fontSize: '20px',
  fontWeight: 'bold'
}

/* Style the search field */
var form_search_input = {
  padding: '10px',
  fontSize: '17px',
  border: '1px solid grey',
  float: 'left',
  width: '250px',
  background: '#f1f1f1',
  marginTop: '8px',
  marginLeft: '8px'
}

/* Style the submit button */
var form_search_button = {
  float: 'left',
  width: '60px',
  padding: '10px',
  background: '#2196F3',
  color: 'white',
  fontSize: '17px',
  border: '1px solid grey',
  borderLeft: 'none', /* Prevent double borders */
  cursor: 'pointer',
  marginTop: '8px',
  marginRight: '8px'
}

function hoverButtonColorOn(e) {
  e.target.style.background = 'white';
}

function hoverButtonColorOff(e) {
  e.target.style.background = 'goldenrod';
}

export default class TopNav extends React.Component {

  render(){
  return(
    <div>
      <div className="topnav" style={topnav}>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <Link to="/Home" style={topnav_a}>
              <img src="logo.png" alt="Shitz-Carlton"></img>
            </Link>
            <Link to="/Register" style={topnav_button}
            onMouseOver={hoverButtonColorOn} onMouseOut={hoverButtonColorOff}>
              Register
            </Link>
            <Link to="/Login" style={topnav_button}
            onMouseOver={hoverButtonColorOn} onMouseOut={hoverButtonColorOff}>
              Log in
            </Link>
            <Link to="/Login" style={topnav_button}
              onMouseOver={hoverButtonColorOn} onMouseOut={hoverButtonColorOff}>
              Book a room
            </Link>
            {/* <!-- Search bar, which doesn't really work yet--> */}
            {/* <form className="search">
              <input type="text" placeholder="Search.." name="search"></input>
              <button type="submit" title="This feature is currently unavailable">
                <i className="fa fa-search"></i>
              </button>
            </form> */}
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  )
  }
}