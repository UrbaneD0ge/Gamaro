import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import NavBar from "../components/NavBar";
import "../styles/login.css";

function Login() {
  // set initial form state
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  // login from utils mutations
  const [login, { error }] = useMutation(LOGIN);

  // handleChange function
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // handle form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="cont">
        <h2>Login</h2>
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="emailInp">
            <label htmlFor="email">Email address:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="passInp">
            <label htmlFor="pwd">Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}
          <button className="subBtn" type="submit">
            Login
          </button>
        </form>
        <Link to="/signup"> Need to Signup?</Link>
      </div>
    </div>
  );
}

export default Login;
