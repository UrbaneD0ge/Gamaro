import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

function Buy() {
  // set initial form state
  const [formState, setFormState] = useState({
    name: "",
    priceMin: 0,
    priceMax: 1000,
    condition: "",
  });

  // handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

    // handle form submit
  const handleFormSubmit = async (event) => {
    // TODO: Display search results
  };

  return (
    <div>
      <h3>What game are you looking for?</h3>
      <form className="" onSubmit={handleFormSubmit}>
        <div className="">
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            placeholder="Game name"
            id="name"
            onChange={handleChange}
          ></input>
        </div>
        <div className="">
          <label htmlFor="minprice">Min Price:</label>
          <input
            name="minprice"
            placeholder=""
            id="minprice"
            onChange={handleChange}
          ></input>
        </div>
        <div className="">
          <label htmlFor="maxprice">Max Price:</label>
          <input
            name="maxprice"
            placeholder=""
            id="maxprice"
            onChange={handleChange}
          ></input>
        </div>

        <div className="">
          <label htmlFor="condition">Condition:</label>
          <select name="condition" id="condition" onChange={handleChange}>
            <option value="">Please choose a category</option>
            <option value="Any">Any</option>
            <option value="manufacturer_sealed">Manufacturer Sealed</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>
        </div>

        <div className="">
          <button className="" type="submit">
            Search Product
          </button>
        </div>
      </form>
      <Link to="/profile">← Go to Profile</Link>
    </div>
  );
}

export default Buy;
