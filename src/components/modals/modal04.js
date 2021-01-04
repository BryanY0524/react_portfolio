import React, { Component } from 'react'

export default class Modal04 extends Component {
    render() {
        return (
            <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">

                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0 text-center" id="portfolioModal4Label">PCPartPicker Budget Companion</h2>
                                        <div className="row justify-content-center mt-3">
                                        <a href="https://github.com/BryanY0524/PCPP-Budget-Companion" target="_blank" rel="noreferrer"><b>Github Repository</b></a>
                                        </div>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <p>— This application is deprecated due to changes in PCPartPicker's API policy. —</p>
                                        <p className="mb-3"><b>Technologies: </b>
                                        Python (PCPartPicker API, Selenium Webdriver, BeautifulSoup4), Git/Github
                                        </p>
                                        <p className="mb-3"><b>Objective: </b>
                                        The overall objective for this project was to have a functional program that provides assistance 
                                        to beginner-novice level computer builders to pick components suitable for their budget.
                                    </p>
                                        <ul className="mlist">
                                            <p><b>Learning Outcomes and Achievements: </b></p>
                                            <li>Learned how to successfully utilize different forms of data containers (Dictionary + Lists) </li>
                                            <li>Learned how to automate browser-based activities (Selenium) </li>
                                            <li>Learned how to utilize different programming functions to obtain the desired outcome (such as filtering a list using for-loop and enumerate)</li>
                                            <li>Learned debug functionalities in PyCharm + VSCode</li>
                                            <li>Learned how to utilize Github for team collaboration</li>
                                            <li>Learned modular design to enable better readability/debugging</li>
                                        </ul>
                                        <p><b>Image Gallery: </b></p>
                                        <div className="row">
                                            <div className="col-lg-8 img-block">
                                                <img className="img-fluid rounded" src={process.env.PUBLIC_URL + "/images/portfolio/desktopbuilder/desktopbuilder.png"} alt="" />
                                                <i>Sample Screenshot of Program Interface</i>
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