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

                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0 text-center" id="portfolioModal2Label">
                                            Image Recognition Website
                                        </h2>
                                        <div className="row justify-content-center mt-3">
                                        <a href="http://www.sartechnology.ca/sartechnology/searchlight/Searchlight.html" target="_blank" rel="noreferrer"><b>Production Website</b></a>
                                        </div>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <p className="mb-3"><b>Technologies: </b>
                                        HTML, CSS, JavaScript, Clarifai API, Datatables
                                    </p>
                                        <p className="mb-3"><b>Objective: </b>
                                        
                                    </p>
                                        <ul className="mlist">
                                            <p><b>Key Deliverables: </b></p>
                                            <li>Improve Sorting for Image Recognition results </li>
                                            <li>Image Segmentation (Split Large images into multiple small images before submitting to Clarifai API) </li>
                                            <li>Display EXIF data extracted from images</li>
                                            <li>Print Results to PDF</li>
                                        </ul>
                                        <p><b>Image Gallery: </b></p>
                                        <div className="row">
                                            <div className="col-lg-12 img-block">
                                                <img className="img-fluid rounded" src={process.env.PUBLIC_URL + "/images/portfolio/SAR/UXUI1.PNG"} alt="" />
                                                <i>Main Interface to upload Images and Select settings</i>
                                            </div>
                                            <div className="col-lg-12 img-block">
                                                <img className="img-fluid rounded" src={process.env.PUBLIC_URL + "/images/portfolio/SAR/datatables.PNG"} alt="" />
                                                <i>Results display in Datatables</i>
                                            </div>
                                            <div className="col-lg-6 img-block">
                                                <img className="img-fluid rounded" src={process.env.PUBLIC_URL + "/images/portfolio/SAR/segmentation_preview.PNG"} alt="" />
                                                <i>Interface for Image Segmentation functionality</i>
                                            </div>
                                            <div className="col-lg-12 img-block">
                                                <img className="img-fluid rounded" src={process.env.PUBLIC_URL + "/images/portfolio/SAR/segmentation_result.PNG"} alt="" />
                                                <i>Sample Result for Segmented Image</i>
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