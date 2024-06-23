import React from 'react';
import project1 from '@/images/project-1.jpg'
import project2 from '@/images/project-2.jpg'
import project3 from '@/images/project-3.jpg'
import project4 from '@/images/project-4.jpg'
import project5 from '@/images/project-5.jpg'
import project6 from '@/images/project-6.jpg'
import Image from 'next/image';
function Projects(props) {
    return (
        <section id="projects" className="projects py-6">
            <div className="container">
                <h2 className="text-center pb-4">
                    Some Of Our <span className="text-secondary">Projects</span>
                </h2>

                <div className="row mb-4">
                    <div className="col-md-4">
                        <div className="card border-0">
                            <Image src={project1} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Office space for banking</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Dolore, impedit.
                                    <a href="article.html">Read More</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0">
                            <Image src={project2} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Planning and design for startup</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Dolore, impedit.
                                    <a href="article.html">Read More</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0">
                            <Image src={project3} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Colors & materials update</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Dolore, impedit.
                                    <a href="article.html">Read More</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-4">
                        <div className="card border-0">
                            <Image src={project4} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Analysis and floor design</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Dolore, impedit.
                                    <a href="article.html">Read More</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0">
                            <Image src={project5} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Office space decoration</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Dolore, impedit.
                                    <a href="article.html">Read More</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0">
                            <Image src={project6} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Playground for kindergarten</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Dolore, impedit.
                                    <a href="article.html">Read More</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;