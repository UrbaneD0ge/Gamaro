import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login() {
  // set initial form state
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
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

    if (formState.confirmedPassword !== formState.password) {
      alert("Confirmed password is not the same!");
    } else {
      try {
        const mutationResponse = await login({
          variables: { email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="confirmedPwd">Confirm Password:</label>
          <input
            placeholder="******"
            name="confirmedPassword"
            type="confirmedPassword"
            id="confirmedPwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="">
          <button type="submit">Submit</button>
        </div>
      </form>
      <Link to="/signup">← Go to Signup</Link>
    </div>
  );
}

export default Login;
