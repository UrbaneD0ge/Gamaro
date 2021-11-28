import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { ADD_PRODUCT } from "../../utils/mutations";

function Sell() {
  // set initial form state
  const [formState, setFormState] = useState({
    name: "",
    price: 0,
    quantity: 0,
    category: "",
    gameOrConsole: false,
    image: null,
    description: "",
  });

  // addProduct from utils mutations
  const [addProduct, { error }] = useMutation(ADD_PRODUCT);

  // handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // handle image upload and preview
  const [imgData, setImgData] = useState(null);
  const handleChangePicture = (event) => {
    const file = event.target.files[0];
    setFormState(file);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImgData(reader.result);
    });
    reader.readAsDataURL(file);
  };

  // handle form submit
  const handleFormSubmit = async (event) => {
    const mutationResponse = await addProduct({
      variables: {
        name: formState.name,
        price: formState.price,
        quantity: formState.quantity,
        category: formState.category,
        gameOrConsole: formState.gameOrConsole,
        image: formState.image,
        description: formState.description,
      },
    });
  };

  return (
    <div>
      <h3>What game do you want to sell?</h3>
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
          <label htmlFor="price">Price:</label>
          <input
            name="price"
            placeholder=""
            id="price"
            onChange={handleChange}
          ></input>
        </div>
        <div className="">
          <label htmlFor="quantity">Quantity:</label>
          <input
            name="quantity"
            placeholder=""
            id="quantity"
            onChange={handleChange}
          ></input>
        </div>

        <div className="">
          <label htmlFor="category">Choose a category:</label>
          <select name="category" id="category" onChange={handleChange}>
            <option value="">Please choose a category</option>
            <option value="Nintendo">Nintendo</option>
            <option value="Xbox">Xbox</option>
            <option value="PlayStation">PlayStation</option>
            <option value="Atari">Atari</option>
            <option value="Sega">Sega</option>
          </select>
        </div>
        <div className="">
          <label htmlFor="gameOrConsole">Choose gameOrConsole:</label>
          <select
            name="gameOrConsole"
            id="gameOrConsole"
            onChange={handleChange}
          >
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </div>

        <div className="">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            placeholder=""
            id="description"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="">
          <label htmlFor="image">Upload a image:</label>
          <input
            type="file"
            name="image"
            placeholder=""
            id="image"
            onChange={handleChangePicture}
          ></input>
        </div>
        {/* preview picture */}
        <div className="previewImage">
          <img className="" src={imgData} alt="preview" />
        </div>

        <div className="">
          <button className="" type="submit">
            Add Product
          </button>
        </div>
        {error && <div className="">Something went wrong...</div>}
      </form>
      <Link to="/profile">← Go to Profile</Link>
    </div>
  );
}

export default Sell;
