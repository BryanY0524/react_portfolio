import React, { Component } from 'react'

export default class Modal01 extends Component {
    render() {
        return (
            <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fas fa-times"></i></span>
                    </button>
                    <div className="modal-body">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0 text-center" id="portfolioModal1Label">Submission Management Portal</h2>
                                    
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <p className="mb-5"><b>Technologies: </b>
                                        Node.js, EJS, bcrypt, Bootstrap, Datatables, MySQL (MariaDB), Git/Github
                                    </p>
                                    <p className="mb-5"><b>Objective: </b>
                                        Create a management portal for faculty members to review Projects submitted, hold discussions about each project, assign projects to different programs, and generate documents (Student Catalogue) required.
                                    </p>
                                    <ul className="mlist">
                                        <p><b>Key Features: </b></p>
                                        <li>Project submission Form </li>
                                        <li>Integration with MySQL database </li>
                                        <li>Accounts/Credentials to Login for faculty members & staff</li>
                                        <li>Datatables to display projects data fetched from MySQL</li>
                                        <li>Auto Documents generation (PDF)</li>
                                        <li>Interface(s) to filter/Edit/Categorize projects</li>
                                        <li>Interface to make notes/comments/feedback on each project</li>
                                    </ul>
                                    <p><b>Image Gallery: </b></p>
                                    <div className="row">
                                        <div className="col-lg-6 img-block">
                                            <img className="img-fluid rounded" src={process.env.PUBLIC_URL +"/images/portfolio/BCIT_SOCAS/submission.PNG"} alt="" />
                                            <i>Submission Form</i>
                                        </div>
                                        <div className="col-lg-6 img-block">
                                            <img className="img-fluid rounded" src={process.env.PUBLIC_URL +"/images/portfolio/BCIT_SOCAS/login_page.PNG"} alt="" />
                                            <i>Login Screen for Management Portal</i>
                                        </div>
                                        <div className="col-lg-6 img-block">
                                            <img className="img-fluid rounded" src={process.env.PUBLIC_URL +"/images/portfolio/BCIT_SOCAS/logged_in.PNG"} alt="" />
                                            <i>Logged-in view</i>
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