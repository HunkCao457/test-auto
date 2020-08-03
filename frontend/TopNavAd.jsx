import React from 'react'
import Admin from './Admin.jsx'
import Homepage from './Homepage.jsx'
import { Link } from 'react-router-dom'


/* Add an orangered background color to the top navigation bar */
var topnav = {
    overflow: 'hidden',
    backgroundColor: 'orangered',
}

/* Style the links (Logo) inside the navigation bar */
var topnav_a = {
    float: 'left',
    display: 'block',
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingLeft: '0px',
    paddingRight: '5px',
}

/* Style the links (Product types) inside the navigation bar*/
var topnav_a_active = {
    display: 'block',
    color: 'black',
    textAlign: 'center',
    padding: '17px 16px',
    float: 'left',
    textDecoration: 'none',
    fontSize: '20px',
}

export default class TopNavAd extends React.Component {

    render(){
        return(
            <div>
                <div className="topnav" style={topnav}>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            {/* Logo, which links to homepage */}
                            <Link to="/Home" style={topnav_a}>
                                <img src="logo.png" alt="Bootleg RMIT"></img>
                            </Link>
                            <Link to="/ProjectsPage" style={topnav_a_active}>Projects</Link>
                            <Link to="/Admin" style={topnav_a_active}>Admin</Link>
                            <Link to="/Upload" style={topnav_a_active}>Upload</Link>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        )
    }
}