import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./reset.css";

const Reset = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
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
                    <div class="col-md-6 reset ">
                        <h1>Reset your password</h1>
                        <p>We'll send you an email to reset your password.</p>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
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
                            <div className="buttonpart">
                                <button type="submit" class="Registebuttton1">
                                    Register
                                </button>
                                <p>Cancel</p>
                            </div>
                            <div className="registerpart">
                                <h3>
                                    {" "}
                                    <b>New Customer?</b>
                                </h3>
                                <p>
                                    Sign up for an account to take advantage of
                                    order tracking and <br />
                                    history as well as pre-filled forms during
                                    checkout on <br />
                                    subsequent orders.
                                </p>
                                <button type="submit" class="Registerbuttton">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-2 "></div>
            </div>
        </>
    );
};
export default Reset;
