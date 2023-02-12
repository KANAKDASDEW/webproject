import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "../image/projects/1.jpg";
import image2 from "../image/projects/2.jpg";
import image3 from "../image/projects/3.jpg";
import image4 from "../image/projects/4.jpg";
import image5 from "../image/projects/5.jpg";
import image6 from "../image/projects/6.jpg";
import image7 from "../image/projects/7.jpg";
import image8 from "../image/projects/8.jpg";

import "./project.css";

const Project = () => {
    return (
        <>
            <div className="project1">
                <Container>
                    <Row>
                        <Col sm={12} className="Project">
                            <h1>Some of Our Esteemed Projects:</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="project3">
                <Row>
                    <Col sm={3} className="service_part3 ">
                        <div class="feature-box media-box">
                            <div class="fbox-media">
                                <img
                                    class="rounded"
                                    src={image1}
                                    alt="Why choose Us?"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} className="service_part3 ">
                        <div class="feature-box media-box">
                            <div class="fbox-media">
                                <img
                                    class="rounded"
                                    src={image2}
                                    alt="Why choose Us?"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} className="service_part3 ">
                        <div class="feature-box media-box">
                            <div class="fbox-media">
                                <img
                                    class="rounded"
                                    src={image3}
                                    alt="Why choose Us?"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} className="service_part3 ">
                        <div class="feature-box media-box">
                            <div class="fbox-media">
                                <img
                                    class="rounded"
                                    src={image4}
                                    alt="Why choose Us?"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3} className="service_part3 ">
                        <div class="feature-box media-box">
                            <div class="fbox-media">
                                <img
                                    class="rounded"
                                    src={image5}
                                    alt="Why choose Us?"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} className="service_part3 ">
                        <div class="feature-box media-box">
                            <div class="fbox-media">
                                <img
                                    class="rounded"
                                    src={image6}
                                    alt="Why choose Us?"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} className="service_part3 ">
                        <div class="feature-box media-box">
                            <div class="fbox-media">
                                <img
                                    class="rounded"
                                    src={image7}
                                    alt="Why choose Us?"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} className="service_part3 ">
                        <div class="feature-box media-box">
                            <div class="fbox-media">
                                <img
                                    class="rounded"
                                    src={image8}
                                    alt="Why choose Us?"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Project;
