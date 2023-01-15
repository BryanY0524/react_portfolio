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
                                    <h5>19-6099 Alder Street</h5>
                                    <h5>Richmond, BC, V6Y 0A8</h5>
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
                                        byuen22@gmail.com
                                </h5>
                                    <h6>REPLY IN 24 HOURS</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="downlad-btn" href="https://drive.google.com/file/d/1DkBLf0TSFo89ddLM2keGoRosOHnCl_VU/view?usp=sharing" target="_blank" download="BryanYuen_Resume.pdf"  rel="noreferrer"><i className="fa fa-download"></i> Download CV</a>
            </div>
        )
    }
}