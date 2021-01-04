import React, { Component } from 'react'

export default class Modal06 extends Component {
    render() {
        return (
            <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal6Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">

                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0 text-center" id="portfolioModal6Label">Submission Management Portal</h2>
                                        <div className="row justify-content-center mt-3">
                                            <a href="https://github.com/BryanY0524/DESKCODE" target="_blank" rel="noreferrer"><b>Github Repository</b></a>
                                        </div>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <p className="mb-3"><b>Technologies: </b>
                                        Node.js, Handlebars, MessageBird API, Bootstrap, MongoDB Atlas, Travis (CI), Git/Github
                                    </p>
                                        <p className="mb-3"><b>Objective: </b>
                                        Create an in browser HTML/CSS/JavaScript Editor that allows users to edit webpages on the go on any device.
                                    </p>
                                        <ul className="mlist">
                                            <p><b>Key Features: </b></p>
                                            <li>Real-time rendering of web-page as the user type </li>
                                            <li>Save User data in Database(MongoDB) </li>
                                            <li>Two-factor authentication</li>
                                            <li>Toggle to turn on/off for Real-time Rendering</li>
                                        </ul>
                                        <p><b>Image Gallery: </b></p>
                                        <div className="row">
                                            <div className="col-lg-6 img-block">
                                                <img className="img-fluid rounded" src={process.env.PUBLIC_URL + "/images/portfolio/Deskcode/login.PNG"} alt="" />
                                                <i>Login Screen</i>
                                            </div>
                                            <div className="col-lg-6 img-block">
                                                <img className="img-fluid rounded" src={process.env.PUBLIC_URL + "/images/portfolio/Deskcode/2factor.PNG"} alt="" />
                                                <i>Sample Screen for Two-factor authentication</i>
                                            </div>
                                            <div className="col-lg-12 img-block">
                                                <img className="img-fluid rounded" src={process.env.PUBLIC_URL + "/images/portfolio/Deskcode/interface.PNG"} alt="" />
                                                <i>Application Interface</i>
                                            </div>
                                        </div>
                                        <div class="row text-center justify-content-center">
                                            <button className="btn btn-primary close-modal" data-dismiss="modal">
                                                <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}