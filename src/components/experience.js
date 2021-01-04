import React, { Component } from 'react'

export default class Exp extends Component {
    render() {
        return (
            <div>
                <section className="experience-section section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="heading">
                                    <h3><b>Work Experience</b></h3>
                                    <h6 className="font-lite-black"><b>Industry Projects</b></h6>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="experience margin-b-50">
                                    <h4><b>DEVELOPMENT LEAD</b></h4>
                                    <h5 className="font-yellow"><b>BCIT School of Computing and Academic Studies</b></h5>
                                    <h6 className="margin-t-10">SEPTEMBER 2020 - DECEMBER 2020</h6>
                                    <p className="font-semi-white margin-tb-30">
                                        In this project, I collaborated in a team of 5 using Agile methodologies as a Development Lead. 
                                        The Objective of this project is to build a submission mangement portal for users to manage and review.
                                        I responsible to develop features required by the client, and oversee the project and team progress. 
                                    </p>
                                    <ul className="list margin-b-30">
                                        <li>Communicate with client and gather information and requirements.</li>
                                        <li>Transform requirements into features and functionalities.</li>
                                        <li>Plan for Milestons and Deliverables for each stage of development.</li>
                                        <li>Oversee the progress and adjust the plan for each sprint.</li>
                                        <li>Design Database Structure and Interface for the application.</li>
                                    </ul>
                                </div>
                                <div className="experience margin-b-50">
                                    <h4><b>JR. DEVELOPER</b></h4>
                                    <h5 className="font-yellow"><b>SAR TECHNOLOGY INC.</b></h5>
                                    <h6 className="margin-t-10">JANUARY 2020 - APRIL 2020</h6>
                                    <p className="font-semi-white margin-tb-30">
                                    In this project, I collaborated in a team of 6 using Agile methodologies as a Jr. Developer. 
                                    The Objective of this project is to improve the legacy website for image recognition, 
                                    and also build an android application using Claifai's SDK (written in Kotlin).
                                    I was responsible to develop a key feature (Image segmentation) and intergrate it with API calls and responses on the Website. 
                                    I was also responsible to assist other developers to improve the UX/UI of the website and the android application. 
                                    </p>
                                    <ul className="list margin-b-30">
                                        <li>Develop Image Segmentation Feature.</li>
                                        <li>Integrate Image Segmentation with API calls and responses.</li>
                                        <li>Improve UX/UI for Website and Android App.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}