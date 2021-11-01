import React, { Component } from 'react'

export default class Modal01 extends Component {
    render() {
        return (
            <div className="portfolio-modal modal fade" id="portfolioModal0" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal0Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">

                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0 text-center" id="portfolioModal0Label">WellTea Restaurant Website (Freelance Project)</h2>
                                        <div className="row justify-content-center mt-3">
                                            <a href="https://welltearichmond.ca/" target="_blank" rel="noreferrer"><b>Well Tea Website</b></a>
                                        </div>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <p className="mb-3"><b>Technologies: </b>
                                        Node.js, Express, Datatables, Google (Firebase, Firestore, Cloud Functions)
                                    </p>
                                        <p className="mb-3"><b>Objective: </b>
                                        Design and Develop a dynamic website with menu, contact form, and reservation management tools for the restaurant.
                                    </p>
                                        <ul className="mlist">
                                            <p><b>Key Features: </b></p>
                                            <li>Responsive Website Deisgn</li>
                                            <li>Contact form</li>
                                            <li>Reservation Management System</li>
                                            <li>Automatic Email Response</li>
                                            <li>Cloud Database for menu and reservation request entry</li>
                                            <li>Cloud Storage for images</li>
                                            <li>Secured Interface(s) to Add/Delete/Edit menu items (with images)</li>
                                        </ul>
                                        <p><b>Image Gallery: </b></p>
                                        <div className="row">
                                            <div className="col-lg-6 img-block">
                                                <img className="img-fluid rounded" src={process.env.PUBLIC_URL + "/images/portfolio/welltea/landing.PNG"} alt="" />
                                                <i>Landing Page</i>
                                            </div>
                                            <div className="col-lg-6 img-block">
                                                <img className="img-fluid rounded" src={process.env.PUBLIC_URL + "/images/portfolio/welltea/contact.PNG"} alt="" />
                                                <i>Contact Form</i>
                                            </div>
                                            <div className="col-lg-6 img-block">
                                                <img className="img-fluid rounded" src={process.env.PUBLIC_URL + "/images/portfolio/welltea/reservation.PNG"} alt="" />
                                                <i>Reservation Form</i>
                                            </div>
                                            <div className="col-lg-6 img-block">
                                                <img className="img-fluid rounded" src={process.env.PUBLIC_URL + "/images/portfolio/welltea/menu.PNG"} alt="" />
                                                <i>Menu</i>
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