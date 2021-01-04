import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="about-section section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="heading">
                                    <h3><b>About me</b></h3>
                                    <h6 className="font-lite-black"><b>WHO AM I?</b></h6>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <p className="margin-b-50">
                                    My name is Bryan Yuen, a recent graduate from BCIT Computer Information Technology (CIT) Program. 
                                    I have experience in <b>Mobile/Web Development</b>, <b>DevOps</b>, and <b>System Administration (Windows & Linux)</b>.
                                    <br/>
                                    I am currently looking for a job and opportunity to contribute my skills and knowledge to develop software/web application.
                                </p>
                                <div className="row">
                                    <div className="col-sm-6 col-md-6 col-lg-3">
                                        <div className="radial-prog-area margin-b-30">
                                            <div className="radial-progress" data-prog-percent=".90">
                                                <div></div>
                                                <h6 className="progress-title"><i className="fab fa-html5 fa-2x"></i> <i className="fab fa-css3-alt fa-2x"></i> <i className="fab fa-js-square fa-2x"></i></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3">
                                        <div className="radial-prog-area margin-b-30">
                                            <div className="radial-progress" data-prog-percent=".85">
                                                <div></div>
                                                <h6 className="progress-title"><i className="fab fa-react fa-2x"></i> <i className="fab fa-angular fa-2x"></i></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3">
                                        <div className="radial-prog-area margin-b-30">
                                            <div className="radial-progress" data-prog-percent=".90">
                                                <div></div>
                                                <h6 className="progress-title"><i className="fab fa-node-js fa-2x"></i> <i className="fab fa-npm fa-2x"></i></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3">
                                        <div className="radial-prog-area margin-b-50">
                                            <div className="radial-progress" data-prog-percent=".90">
                                                <div></div>
                                                <h6 className="progress-title"><i className="fab fa-python fa-2x"></i></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}