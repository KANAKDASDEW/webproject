import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image11 from "../image/image11.jpg";
import "./slider.css";

const Mainpart = () => {
    return (
        <>
            <section class="banner_part">
                <div class="banner_overlay">
                    <div
                        id="carouselExampleIndicators"
                        class="carousel slide"
                        data-ride="carousel"
                    >
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="banner_content text-center">
                                                <h1>
                                                    Sports Clothing &
                                                    <br /> Fitness Equipment{" "}
                                                    <br /> Shopify Themeview
                                                    shop
                                                </h1>
                                                <a href="#" class="btn btn_com">
                                                    VIEW SHOP
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Mainpart;
