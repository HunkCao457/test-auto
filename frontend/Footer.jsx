import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

/* Style footer */
var footer = {
    backgroundColor: 'goldenrod',
    paddingTop: '10px',
    paddingBottom: '15px',
    color: 'black',
    // position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    fontFamily: "Times New Roman, Times, serif"
}

export default class Footer extends React.Component {

    render(){
        return(
            <div>
                {/* <div className="footer" style={footer}>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <table className="contact-table" style={{width: '100%'}}>
                                <tr>
                                    <th style={{width: '92px'}}>Contact Us:</th>
                                    <th style={{fontWeight: 'normal'}}>1800 7330</th>
                                    <th style={{float: 'right', fontWeight: 'normal'}}>
                                        <b>Office: </b>66-68 Le Thanh Ton, Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam
                                    </th>
                                </tr>
                                <tr>
                                    <td style={{width: '92px'}}></td>
                                    <td>bootlegrmit@gmail.com</td>
                                    <td style={{float: 'right', fontSize: '20px', fontWeight: 'bold'}}>
                                        <i>Bootleg RMIT - Bringing you an education that feels real but isn't</i>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div> */}

                <div className="footer"  style={footer}>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <table className="contact-table" style={{width: "100%"}}>
                                <tr>
                                    <th style={{width: "92px"}}>Contact Us:</th>
                                    <th style={{fontWeight: "normal"}}>1800 9999</th>
                                    <th style={{float: "right", fontWeight: "normal"}}>
                                        <b>Address: </b>5388 US-95, Amargosa Valley, NV 89020, United States
                                    </th>
                                </tr>
                                <tr>
                                    <td style={{width: "92px"}}></td>
                                    <td>shitzcarlton.hotel@gmail.com</td>
                                    <td style={{float: "right", fontSize: "20px", fontWeight: "bold"}}>
                                        <i>Shitz-Carlton - Just give us your money</i>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        )
    }
}