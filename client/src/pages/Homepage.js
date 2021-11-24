import React from "react";
import NavBar from "../components/NavBar";
// import Buy from "../components/Buy";
// import Sell from "../components/Sell";
// import Profile from "../components/Profile";
// import Review from "../components/Review";

const Home = () => {
  return (
    <div className="modal-body">
      {/* <h1>START GAME</h1>
      <div className="container-fluid">
        <div className="row">
          <Buy className="col-md-4">Buy</Buy>
          <Sell className="col-md-4 ml-auto">Sell</Sell>
        </div>
        <div className="row">
          <Profile className="col-md-4 ml-auto">My Profile</Profile>
          <Review className="col-md-4 ml-auto">Review</Review>
        </div>
      </div> */}
      <NavBar />
      <div className="homeCont row">
        <div className="searchPanel col s3 grey lighten-2" id="search">
          <h3 className="center">Search</h3>
          <h5>
            <form>
              <h6>Console</h6>
              <h6>Genre</h6>
              <h6>Release</h6>
              <h6>Rating</h6>
            </form>
          </h5>
        </div>
        <button
          id="FAB"
          className="btn btn-floating yellow modal-trigger fixed-action-btn"
          data-target="modal1"
        >
          <span id="play">▶</span>
        </button>
        <div className="feed col s9"></div>
      </div>
    </div>
  );
};

export default Home;
