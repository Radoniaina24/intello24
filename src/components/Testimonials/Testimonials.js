import React from 'react';
import testimonial1 from '@/images/testimonial-1.jpg'
import testimonial2 from '@/images/testimonial-2.jpg'
import testimonial3 from '@/images/testimonial-3.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft, faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
function Testimonials(props) {
    return (
        <section id="testimonials" className="testimonials bg-light py-6">
            <div id="testimonialCarousel" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div
                            className="d-flex flex-column justify-content-center align-items-center text-center"
                        >
                            <Image
                                src={testimonial1}
                                alt=""
                                className="rounded-circle"
                                width="120"
                            />
                            <p className="w-50 my-4 fst-italic fs-4 mb-4">
                                “Expense bed any sister depend changer off piqued one. Contented
                                continued any happiness instantly objection yet her allowance.
                                Use correct day new brought tedious. By come this been in. Kept
                                easy or sons my it how about some words here done”
                            </p>
                            <div className="fw-bold fs-5 mt-4">Marlene Visconte</div>
                            <div>General Manager - Scouter</div>
                        </div>
                    </div>

                   
                    <div className="carousel-item">
                        <div
                            className="d-flex flex-column justify-content-center align-items-center text-center"
                        >
                            <Image
                                src={testimonial2}
                                alt=""
                                className="rounded-circle"
                                width="120"
                            />
                            <p className="w-50 my-4 fst-italic fs-4 mb-4">
                                “Expense bed any sister depend changer off piqued one. Contented
                                continued any happiness instantly objection yet her allowance.
                                Use correct day new brought tedious. By come this been in. Kept
                                easy or sons my it how about some words here done”
                            </p>
                            <div className="fw-bold fs-5 mt-4">John Spiker</div>
                            <div>Team Leader - Vanquish</div>
                        </div>
                    </div>
                   
                    <div className="carousel-item">
                        <div
                            className="d-flex flex-column justify-content-center align-items-center text-center"
                        >
                            <Image
                                src={testimonial3}
                                alt=""
                                className="rounded-circle"
                                width="120"
                            />
                            <p className="w-50 my-4 fst-italic fs-4 mb-4">
                                “Expense bed any sister depend changer off piqued one. Contented
                                continued any happiness instantly objection yet her allowance.
                                Use correct day new brought tedious. By come this been in. Kept
                                easy or sons my it how about some words here done”
                            </p>
                            <div className="fw-bold fs-5 mt-4">Stella Virtuoso</div>
                            <div>Design Chief - Bikegirl</div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide="prev"
                >
                    <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-3x text-secondary"/>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide="next"
                >
                    <FontAwesomeIcon icon={faArrowCircleRight} className="fa-3x text-secondary"/>
                </button>
            </div>
        </section>
    );
}

export default Testimonials;