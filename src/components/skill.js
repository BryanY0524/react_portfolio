import React, { Component } from 'react'

export default class Skill extends Component {
    render() {
        return (
            <div>
                <section className="skill-section section" id="skill-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="heading">
                                    <h3><b>Skills</b></h3>
                                    <h6 className="font-lite-black"><b>What can I do?</b></h6>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-md-6 col-lg-4">
                                <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                                    <div className="icon shadow d-flex align-items-center justify-content-center"><i className="fas fa-running"></i></div>
                                    <div className="media-body">
                                        <h3 className="heading2 mb-3">Agile and Project Management</h3>
                                        <p>I have experience in various devlopment teams using Agile Methodology. I am able to 
                                            extract software requirements based on client's needs and plan for deliverables for each sprint accordingly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                                    <div className="icon d-flex align-items-center justify-content-center"><i className="fas fa-code fa-2x"></i></div>
                                    <div className="media-body">
                                        <h3 className="heading2 mb-3">Mobile/Web Development</h3>
                                        <p>I have experience Designing and Developing Mobile/Web Application with <b>HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, AngularJS, React</b>, etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                                    <div className="icon shadow d-flex align-items-center justify-content-center"><i className="fas fa-database"></i></div>
                                    <div className="media-body">
                                        <h3 className="heading2 mb-3">Database Management</h3>
                                        <p>I have experience with Databases such as <b>Microsoft SQL Server, MySQL, MongoDB, Google Firebase/Firestore, SQLite</b>, etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                                    <div className="icon shadow d-flex align-items-center justify-content-center"><i className="fas fa-file-code"></i></div>
                                    <div className="media-body">
                                        <h3 className="heading2 mb-3">Programming</h3>
                                        <p>I have experience in building Applications using <b>Service Oriented Architecture (SOA) and Object Oriented Programming (OOP)</b>.
                                        I also have experience building <b>Python Flask app/RESTful API</b>. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                                    <div className="icon shadow d-flex align-items-center justify-content-center"><i className="fas fa-cogs"></i></div>
                                    <div className="media-body">
                                        <h3 className="heading2 mb-3">DevOps</h3>
                                        <p>I have experience with DevOps tools such as <b>Jenkins, Docker, CI/CD</b>. I also have experience automating tasks with <b>Bash Script</b>.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                                    <div className="icon shadow d-flex align-items-center justify-content-center"><i className="fas fa-server"></i></div>
                                    <div className="media-body">
                                        <h3 className="heading2 mb-3">System Administration</h3>
                                        <p>
                                            I have experience managing Windows Servers and Linux environment through CLI both locally and with <b>Cloud</b> services such as <b>AWS/Azure</b>. 
                                            As well as provisioning using <b>Vagrant, Ansible, and Packer</b>.
                                        </p>
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