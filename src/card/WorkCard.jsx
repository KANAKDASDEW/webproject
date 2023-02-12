import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import "./workcard.css";
const WorkCard = (props) => {
    const { img, title, price } = props.data;

    return (
        <>
            <Col sm={3} className="service_part3 ">
                <div class="fbox-media ">
                    <img
                        style={{}}
                        class="rounded"
                        src={img}
                        alt="Why choose Us?"
                    />
                </div>
                <div class="fbox-content">
                    <h3>{title}</h3>
                    <p>
                        <b>{price}</b>
                    </p>
                </div>
            </Col>
        </>
    );
};

export default WorkCard;
