import React, { Component } from 'react'

export default class Edu extends Component {
    render() {
        return (
            <div>
                <section className="education-section section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="heading">
                                    <h3><b>Education</b></h3>
                                    <h6 className="font-lite-black"><b>ACADEMIC CAREER</b></h6>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="education-wrapper">
                                    <div className="education margin-b-50">
                                        <h4><b>COMPUTER INFORMATION TECHNOLOGY DIPLOMA</b></h4>
                                        <h5 className="font-yellow"><b>BRITISH COLUMBIA INSTITUTE OF TECHNOLOGY</b></h5>
                                        <h6 className="font-lite-black margin-t-10">GRADUATED WITH DISTINCTION (85% GPA)</h6>
                                        <p className="margin-tb-30">
                                            Refined my coding and analytical skills and learned about web development using various framework, libraries, and APIs.
                                        </p>
                                    </div>
                                    <div className="education margin-b-50">
                                        <h4><b>MAJOR IN PHYSICS</b></h4>
                                        <h5 className="font-yellow"><b>UNIVERSITY OF BRITISH COLUMBIA - BSC</b></h5>
                                        <h6 className="font-lite-black margin-t-10">INCOMPLETE (2014-2017)</h6>
                                        <p className="margin-tb-30"></p>
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