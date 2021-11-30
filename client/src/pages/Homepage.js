import React from "react";
import NavBar from "../components/NavBar";
import M from "materialize-css";
// import Buy from "../components/Buy";
// import Sell from "../components/Sell";
// import Profile from "../components/Profile";
// import Review from "../components/Review";

var modal = document.getElementById("modal1");
M.Modal.init(modal);



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
          id="modal1"
          className="btn btn-floating yellow modal-trigger fixed-action-btn"
          data-target="modal1"
        // onClick={modal1.open()}
        >
          <span id="play">▶</span>
        </button>
{/* Modal content */}
        <div><h1 class="hide logo center">START</h1></div>
    <div id="pad" className="hide container">
      <div className
    ="row d-flex">
        <div className
      ="col">
    <button className="btn btn-floating red"></button><h5
    className
    ="logo">Buy</h5>
    <button className="btn btn-floating blue"></button><h5
    className
    ="logo">Sell</h5></div><div class="row">
    <button className="btn btn-floating green"></button><h5
    className
    ="logo">Profile</h5>
    <button className="btn btn-floating yellow"></button><h5
    className
    ="logo">Review</h5></div>
      </div>
        </div>
{/* End Modal */}
        <div className="feed col s9"></div>
      </div>
    </div>
  );
};

export default Home;
