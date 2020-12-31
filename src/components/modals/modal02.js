import React, { Component } from 'react'

export default class Modal02 extends Component {
    render() {
        return (
            <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fas fa-times"></i></span>
                    </button>
                    <div className="modal-body">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0 text-center" id="portfolioModal2Label">Image Recognition Website</h2>
                                    
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <p className="mb-5"><b>Objective: </b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <ul className="mlist">
                                        <li className="row">Duis non volutpat arcu, eu mollis tellus.</li>
                                        <li className="row">Quis consequat nulla effi citur at.</li>
                                        <li className="row">Sed finibus aliquam neque sit.</li>
                                    </ul>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <img className="img-fluid rounded" src={process.env.PUBLIC_URL +"/images/portfolio/BCIT_SOCAS/submission.png"} alt="" />
                                            Submission Form
                                        </div>
                                        <div className="col-lg-6">
                                            <img className="img-fluid rounded" src={process.env.PUBLIC_URL +"/images/portfolio/BCIT_SOCAS/login_page.png"} alt="" />
                                            Login Screen for Management Portal
                                        </div>
                                        <div className="col-lg-6">
                                            <img className="img-fluid rounded" src={process.env.PUBLIC_URL +"/images/portfolio/BCIT_SOCAS/logged_in.png"} alt="" />
                                            Logged-in view
                                        </div>
                                    </div>
                                    
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

        )
    }
}