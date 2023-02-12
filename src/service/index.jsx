import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import image1 from "../image/img/1.jpg";
import image22 from "../image/image22.jpg";
import { workData } from "../Resourse/Projectdata";
import WorkCard from "../card/WorkCard";
import "./service.css";

const Service = () => {
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        setProjectData(workData);
    }, []);

    return (
        <>
            <div className="service_part1">
                <Container>
                    <Row>
                        <Col sm={12} className="service_part11">
                            <h6>What a new </h6>
                            <h1> SHOP THE LATEST</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa.
                                <br />
                                Cum sociis Theme natoque penatibus et magnis dis
                                parturient montes, nascetur
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    {projectData.map((x) => (
                        <WorkCard key={x.id} data={x}></WorkCard>
                    ))}

                    <div className="row pt-5">
                        <div className="col-12 d-flex justify-content-center viewall">
                            <button
                                className="btn btn-outline-dark"
                                type="button"
                            >
                                View All PRODUCTS
                            </button>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Service;
