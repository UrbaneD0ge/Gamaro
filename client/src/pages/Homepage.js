import React from "react";
import Buy from "../components/Buy";
import Sell from "../components/Sell";
import Profile from "../components/Profile";
import Review from "../components/Review";

const Home = () => {
  return (
    <div className="modal-body">
      <h1>START GAME</h1>
      <div className="container-fluid">
        <div className="row">
          <Buy className="col-md-4">Buy</Buy>
          <Sell className="col-md-4 ml-auto">Sell</Sell>
        </div>
        <div className="row">
          <Profile className="col-md-4 ml-auto">My Profile</Profile>
          <Review className="col-md-4 ml-auto">Review</Review>
        </div>
      </div>
    </div>
  );
};

export default Home;
