import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import Auth from "../utils/auth";

import { ADD_USER } from "../utils/mutations";

function Signup() {
  // set initial form state
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  // addUser from utils mutations
  const [addUser] = useMutation(ADD_USER);

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

    // check if confirmed password equal to the password
    if (formState.password !== formState.confirmedPassword) {
      alert("Confirmed Password is not the same!");
    } else {
      const mutationResponse = await addUser({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          userName: formState.userName,
          email: formState.email,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="userName">Username:</label>
          <input
            placeholder="Username"
            name="userName"
            type="userName"
            id="userName"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="email">Email:</label>
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
        <div className="">
          <button type="submit">Submit</button>
        </div>
      </form>
      <Link to="/login">← Go to Login</Link>
    </div>
  );
}

export default Signup;
