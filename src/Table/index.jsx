import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import "./table.css";

const TablePart = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8} className="profile">
                        <h1>
                            <b>User Profile</b>
                        </h1>
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nabil</td>
                                    <td>Hasan</td>
                                    <td>Hasan</td>
                                    <td>Hasan123</td>
                                </tr>
                                <tr>
                                    <td>Nabil</td>
                                    <td>Hasan</td>
                                    <td>Hasan</td>
                                    <td>Hasan123</td>
                                </tr>
                                <tr>
                                    <td>Nabil</td>
                                    <td>Hasan</td>
                                    <td>Hasan</td>
                                    <td>Hasan123</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>3User</b>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
        </>
    );
};
export default TablePart;
