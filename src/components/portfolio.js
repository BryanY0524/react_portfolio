import React, { Component } from 'react'

export default class Portfolio extends Component {
    render() {
        return (
            <section className="page-section portfolio portfolio-section section" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="heading">
                                <h3><b>Portfolio</b></h3>
                                <h6 className="font-lite-black"><b>MY WORK</b></h6>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="portfolioFilter clearfix margin-b-80">
                                <button data-filter="*" className="current"><b>ALL</b></button>
                                <button data-filter=".web-design"><b>Web App</b></button>
                                <button data-filter=".programming"><b>Programming</b></button>
                                <button data-filter=".other"><b>Other</b></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center portfolioContainer">

                        <div className="col-md-6 col-lg-4 mb-5 p-item web-design">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1" data-backdrop="static" data-keyboard="false">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={process.env.PUBLIC_URL +"/images/portfolio/BCIT_SOCAS/icon.PNG"} alt="" />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5 p-item web-design">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2" data-backdrop="static" data-keyboard="false">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={process.env.PUBLIC_URL +"/images/portfolio/SAR/icon.png"} alt="" />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5 p-item programming">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={process.env.PUBLIC_URL +"/images/portfolio/SAR/app_icon.png"} alt="" />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5 p-item programming">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={process.env.PUBLIC_URL +"/images/portfolio/desktopbuilder/icon.png"} alt="" />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5 p-item programming">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={process.env.PUBLIC_URL +"/images/portfolio/Algo/icon.PNG"} alt="" />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5 p-item web-design">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={process.env.PUBLIC_URL +"/images/portfolio/Deskcode/icon.PNG"} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}