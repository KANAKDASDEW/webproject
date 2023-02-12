import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Signup.css";

const Signup = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <div class="container-fluid ">
                <div class="row">
                    <div class="col-md-4 "></div>
                    <div class="col-md-6 signup ">
                        <h1>Sign up</h1>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <div class="form-group">
                                <label for="exampleInputEmail1">
                                    Fist Your Name
                                </label>
                                <br />
                                <br />

                                <input
                                    style={{ width: "500px" }}
                                    name="name"
                                    onChange={handleChange}
                                    value={inputs.name}
                                    type="text"
                                    id=""
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">
                                    <br />
                                    Last Your Name
                                </label>
                                <br />
                                <br />

                                <input
                                    style={{ width: "500px" }}
                                    name="name"
                                    onChange={handleChange}
                                    value={inputs.name}
                                    type="text"
                                    id=""
                                    placeholder="Enter your last name"
                                />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">
                                    <br />
                                    Email
                                </label>
                                <br />
                                <br />

                                <input
                                    style={{ width: "500px" }}
                                    name="email"
                                    onChange={handleChange}
                                    value={inputs.email}
                                    type="email"
                                    id=""
                                    placeholder="Your@email.com"
                                />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">
                                    <br />
                                    Password
                                </label>
                                <br />
                                <br />

                                <input
                                    style={{ width: "500px" }}
                                    name="password"
                                    onChange={handleChange}
                                    value={inputs.password}
                                    type="password"
                                    id=""
                                    placeholder="*******"
                                />
                            </div>

                            <Link to="/login">
                                {" "}
                                <button type="submit" class="signbuttton">
                                    Register
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
                <div class="col-md-2 "></div>
            </div>
        </>
    );
};
export default Signup;
