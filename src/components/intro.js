import React, { Component } from 'react'

export default class Intro extends Component {
    render() {
        return (
            <div>
                <section className="intro-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-1 col-lg-2"></div>
                            <div className="col-md-10 col-lg-8">
                                <div className="intro">
                                    <div className="profile-img"><img src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="" /></div>
                                    <h2><b>Bryan Yuen</b></h2>
                                    <h4 className="font-yellow">Recent Graduate From BCIT</h4>
                                    <ul className="information margin-tb-30">
                                        <li><b>Program : </b>Computer Information Technology</li>
                                        <li><b>Email : <a href="mailto:byuen22@my.bcit.ca">byuen22@my.bcit.ca</a></b></li>
                                        <li><b>GPA : </b>85%</li>
                                    </ul>
                                    <ul className="social-icons">
                                        <li><a href="https://github.com/BryanY0524" target="_blank" rel="noreferrer"><i className="fab fa-github fa-lg"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/bryuen/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-lg"></i></a></li>
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