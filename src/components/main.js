import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <div className="container">
                <div className="heading-wrapper">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <div className="info">
                                <i className="icon fas fa-map-marker-alt"></i>
                                <div className="right-area">
                                    <h5>1-7333 Turnill Street</h5>
                                    <h5>Richmond, BC, V6Y 4L7</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <div className="info">
                                <i className="icon fas fa-phone"></i>
                                <div className="right-area">
                                    <h5>778-869-0533</h5>
                                    <h6>MON - FRI, 8AM - 7PM</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <div className="info">
                                <i className="icon fas fa-envelope"></i>
                                <div className="right-area">
                                    <h5>
                                        byuen22@my.bcit.ca
                                </h5>
                                    <h6>REPLY IN 24 HOURS</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="downlad-btn" href={process.env.PUBLIC_URL + '/Resume.pdf'} target="_blank" download="BryanYuen_Resume.pdf"  rel="noreferrer"><i className="fa fa-download"></i> Download CV</a>
            </div>
        )
    }
}