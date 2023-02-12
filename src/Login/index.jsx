import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./login.css";

const Login = () => {
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
                    <div class="col-md-6 login ">
                        <h1>Log in</h1>
                     
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <div class="form-group">
                                <label for="exampleInputEmail1">
                                   
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


                          <div className="loginbuttonpart">
                            <button type="submit" class="Registebuttton1">
                                Register
                                
                            </button>
                            <Link className='forgetpass' to='/reset' >Forgot your password?</Link>
                            </div>
                            <div className="registerpart">
                         
                         <h3> <b>New Customer?</b></h3>
                         <p>Sign up for an account to take advantage of order tracking and <br/>
                          history as well as pre-filled forms during checkout on <br/>subsequent orders.</p>
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
export default Login;
