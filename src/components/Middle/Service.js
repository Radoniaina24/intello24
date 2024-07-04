import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartBar, faChartPie, faClock, faComment, faRocket, faTools} from "@fortawesome/free-solid-svg-icons";

function Service(props) {
    return (
        <section id="services" className="services bg-light py-6">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="text-container text-center text-lg-start">
                            <h2>
                                <span className="text-secondary">Services</span> that we offer
                            </h2>
                            <p>
                                At our company, we provide a wide range of services to meet all
                                your office design needs. With our expertise and attention to
                                detail, we ensure that every aspect of your office space is
                                carefully considered and executed.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row mb-4">
                            <div
                                className="col-md-4 d-flex flex-column align-items-center text-center"
                            >
                                <FontAwesomeIcon  size="xs"icon={faRocket} className="text-secondary mb-2"/>
                                <p className="fs-5 fw-bold">Space Analysis & Planning</p>
                            </div>
                            <div
                                className="col-md-4 d-flex flex-column align-items-center text-center"
                            >
                                <FontAwesomeIcon icon={faClock} className="text-secondary mb-2"/>
                                <p className="fs-5 fw-bold">Design & Color Choosing</p>
                            </div>
                            <div
                                className="col-md-4 d-flex flex-column align-items-center text-center"
                            >
                                <FontAwesomeIcon icon={faComment} className="text-secondary mb-2"/>
                                <p className="fs-5 fw-bold">Materials & Delivery</p>
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className="col-md-4 d-flex flex-column align-items-center text-center"
                            >
                                <FontAwesomeIcon icon={faTools} className="text-secondary mb-2"/>
                                <p className="fs-5 fw-bold">Execute The Concept</p>
                            </div>
                            <div
                                className="col-md-4 d-flex flex-column align-items-center text-center"
                            >
                                <FontAwesomeIcon icon={faChartPie} className="text-secondary mb-2"/>
                                <p className="fs-5 fw-bold">Create A Great Atmosphere</p>
                            </div>
                            <div
                                className="col-md-4 d-flex flex-column align-items-center text-center"
                            >
                                <FontAwesomeIcon icon={faChartBar} className="text-secondary mb-2"/>
                                <p className="fs-5 fw-bold">Evaluation & Reporting</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;