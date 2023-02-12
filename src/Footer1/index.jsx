import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image31 from "../image/image31.jpg";
import image32 from "../image/image32.jpg";
import image33 from "../image/image333.jpg";
import image34 from "../image/image34.jpg";
import image35 from "../image/image35.jpg";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter,
    
} from "@fortawesome/free-brands-svg-icons";

const Footer1 = () => {
    return (
        <footer id="footer">
            <div className="social-container">
                <p>gallery</p>
                <h2> INSTAGRAM</h2>
            </div>
            <Container className="project3">
                <Row>
                    <Col sm={2} className="service_part3 ">
                        <div class="feature-box media-box">
                            <div class="fbox-media">
                                <img
                                    class="rounded"
                                    src={image31}
                                    alt="Why choose Us?"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col sm={2} className="service_part3 ">
                        <div class="feature-box media-box">
                            <div class="fbox-media">
                                <img
                                    class="rounded"
                                    src={image32}
                                    alt="Why choose Us?"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col sm={2} className="service_part3 ">
                        <div class="feature-box media-box">
                            <div class="fbox-media">
                                <img
                                    class="rounded"
                                    src={image33}
                                    alt="Why choose Us?"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col sm={2} className="service_part3 ">
                        <div class="feature-box media-box">
                            <div class="fbox-media">
                                <img
                                    class="rounded"
                                    src={image34}
                                    alt="Why choose Us?"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col sm={2} className="service_part3 ">
                        <div class="feature-box media-box">
                            <div class="fbox-media">
                                <img
                                    class="rounded"
                                    src={image35}
                                    alt="Why choose Us?"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="line"></div>
            <Container className="footterpartstart">
                <Row>
                    <Col sm={3} className="logopart ">
                        <h1>LOGO.</h1>
                        <p>
                            Be the first who learns about ourgreat promotions!
                        </p>
                        <h6>Follow US</h6>
                        <Nav>
                        <Nav.Item>
                                <Nav.Link
                                    href=""
                                    className="Twitter"
                                >
                                    <FontAwesomeIcon style={{color:"white"}} icon={ faTwitter} />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    href=""
                                    className="Facebook"
                                >
                                    <FontAwesomeIcon style={{color:"white"}} icon={faFacebook} />
                                </Nav.Link>
                            </Nav.Item>

                            

                            <Nav.Item>
                                <Nav.Link
                                    href=""
                                    className="Instagram"
                                >
                                    {" "}
                                    <FontAwesomeIcon style={{color:"white"}} icon={   faInstagram} />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={2} className="logopart">
                        <h4>Product</h4>
                        <p>New Arrival</p>
                        <p>Best Seller</p>
                        <p>On Sale</p>
                        <p>All Collection</p>
                    </Col>
                    <Col sm={2} className="logopart ">
                        <h4>CATEGORY</h4>
                        <p>Barbells</p>
                        <p>Benches</p>
                        <p>Benches</p>
                        <p>Appareal</p>
                        <p>Straps & Supports</p>
                    </Col>
                    <Col sm={2} className="logopart ">
                        <h4>Info</h4>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Feature</p>
                        <p>Store Location</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </Col>
                    <Col sm={3} className="logopart ">
                        <h4>SUBSCRIBE</h4>
                        <p>
                            Subscribe our newsletter and get <br />
                            discount 30% off
                        </p>
                        <div class="co">
                            <input
                                type="text"
                                id=""
                                name="name"
                                placeholder="Enter your email*"
                            />
                            <Button variant="primary" size="sm">
                                Sign up
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer1;
