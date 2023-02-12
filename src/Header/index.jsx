import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import "./header.css";

const Header = () => {
    return (
        <>
            <div className="nav_bar ">
                <div className="nav container">
                    <div className="logo">
                        <p>
                            <b>LOGO.</b>
                        </p>
                    </div>
                    <div className="main_menu">
                        <ul className="menu">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home{" "}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">
                                    Feature
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/table">
                                    Contacts
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="resister_account">
                        <Link style={{ padding: "5px" }} to="/">
                            <FaSistrix />
                        </Link>

                        <Link style={{ padding: "5px" }} to="/home">
                            <FaUser />
                        </Link>

                        <Link style={{ padding: "5px" }} to="/table">
                            <FaRegEnvelope />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
