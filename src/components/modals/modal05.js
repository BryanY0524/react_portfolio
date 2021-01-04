import React, { Component } from 'react'

export default class Modal05 extends Component {
    render() {
        return (
            <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal5Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">

                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0 text-center" id="portfolioModal5Label">Algorithm Research</h2>
                                        <div className="row justify-content-center mt-3">
                                        <a className="col text-center" href="https://github.com/BryanY0524/Algroithm-Research-Project" target="_blank" rel="noreferrer"><b>Github Repository</b></a>

                                        <a className="col text-center" href="https://www.overleaf.com/read/cftmrzxzccsd" target="_blank" rel="noreferrer"><b>Research Paper (Overleaf)</b></a>
                                        </div>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <p className="mb-3"><b>Technologies: </b>
                                        Python (Pandas, Numpy), Git/Github
                                    </p>
                                        <p className="mb-3"><b>Objective: </b>
                                        Timetable scheduling problem in an academic setting is a NP-Hard problem that has room for optimization through machine learning 
                                        and local search algorithms. Genetic Algorithm, as a meta-heuristic solution, has been utilized to solve this problem. 
                                        Combined with Iterative Deepening Depth-First Search, a search algorithm utilized to search for solution in a localized problem domain, 
                                        this paper researches the potential of a hybrid form of genetic algorithm for with the goal to optimize the timetable scheduling problem.
                                    </p>

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