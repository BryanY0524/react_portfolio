import React, { Component } from 'react'

export default class Modal03 extends Component {
    render() {
        return (
            <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">

                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0 text-center" id="portfolioModal3Label">Real-time Image Recognition Android App</h2>
                                        <div className="row justify-content-center mt-3">
                                            <a href="https://github.com/BryanY0524/ISSP-SAR-Realtime-App" target="_blank" rel="noreferrer"><b>Github Repository</b></a>
                                        </div>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <p className="mb-3"><b>Technologies: </b>
                                        Kotlin, Java, Clarifai SDK (deprecated), Git/Github
                                    </p>
                                        <p className="mb-3"><b>Objective: </b>
                                        Create a android application that takes snapshot of images and save the corresponding image recognition prediction values. 
                                        It should also allow the use to review the snapshot.
                                    </p>
                                        <ul className="mlist">
                                            <p><b>Key Features: </b></p>
                                            <li>Real-time image recognition </li>
                                            <li>Saving Image and Prediction values </li>
                                        </ul>
                                        <p><b>Image Gallery: </b></p>
                                        <div className="row">
                                            <div className="col-sm-6 col-lg-3 img-block">
                                                <img className="img-fluid rounded" src={process.env.PUBLIC_URL + "/images/portfolio/SAR/app_main.png"} alt="" />
                                                <i>Android App Main Screen</i>
                                            </div>
                                            <div className="col-sm-6 col-lg-3 img-block">
                                                <img className="img-fluid rounded" src={process.env.PUBLIC_URL + "/images/portfolio/SAR/app_action.png"} alt="" />
                                                <i>Option to change snapshot interval and Clear images saved </i>
                                            </div>
                                            <div className="col-sm-6 col-lg-3 img-block">
                                                <img className="img-fluid rounded" src={process.env.PUBLIC_URL + "/images/portfolio/SAR/app_setting.png"} alt="" />
                                                <i>Snapshot Time Interval Setting</i>
                                            </div>
                                            <div className="col-sm-6 col-lg-3 img-block">
                                                <img className="img-fluid rounded" src={process.env.PUBLIC_URL + "/images/portfolio/SAR/app_graph.jpg"} alt="" />
                                                <i>Review of Snapshots with Prediction values plotted</i>
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