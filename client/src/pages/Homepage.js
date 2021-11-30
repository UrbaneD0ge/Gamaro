import React from "react";
import NavBar from "../components/NavBar";
import Search from "../components/SearchBar";
import M from "materialize-css";
import Feed from "../components/Feed";
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
          <br /> <br />
          <h3 className="center">Search</h3>
          <h5>
            <Search />
          </h5>
        </div>
        <button
          id="modal1"
          className="btn btn-floating yellow modal-trigger fixed-action-btn"
          data-target="modal1"
          // onClick={modal1.open()}
        >
          <span id="play">▶</span>
        </button>{" "}
        <br></br>
        {/* Modal content */}
        <div>
          <h1 className="hide logo center">START</h1>
        </div>
        <div id="pad" className="hide container">
          <div className="row d-flex">
            <div className="col">
              <button className="btn btn-floating red"></button>
              <h5 className="logo">Buy</h5>
              <button className="btn btn-floating blue"></button>
              <h5 className="logo">Sell</h5>
            </div>
            <div className="row">
              <button className="btn btn-floating green"></button>
              <h5 className="logo">Profile</h5>
              <button className="btn btn-floating yellow"></button>
              <h5 className="logo">Review</h5>
            </div>
          </div>
        </div>
        {/* End Modal */}
        <div className="feed col s9 right">
          {/* demo content block */}
          <article className="container d-flex row">
            <img
              className="profile"
              src="https://i.ibb.co/9twjYxJ/00100l-PORTRAIT-00100-BURST20190919181515033-COVER-2.jpg"
              alt="Profile"
            ></img>
            <div className="col grey lighten-1 content">
              <img
                className="col right"
                src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1o4d.png"
                alt="Game cover"
              ></img>
              <h4>$Username is $transactionType $title</h4>
              <p>
                {" "}
                $description Recently got my hands on this classic city building
                sim and want to find a good home for it! Message me with your
                best offer! PC only, but the disk is in great condition, tested
                just fine on my computer.
              </p>
              <button className="btn red sell code right">$Buy It!</button>
            </div>
          </article>
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Home;
