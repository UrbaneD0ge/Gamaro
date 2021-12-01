import React from "react";
import NavBar from "../components/NavBar";
import Search from "../components/SearchBar";
import Feed from "../components/Feed";
import Modal from "../components/Modal";
// import Buy from "../components/Buy";
// import Sell from "../components/Sell";
// import Profile from "../components/Profile";
// import Review from "../components/Review";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="homeCont row">
        <div className="searchPanel col s3 grey lighten-2" id="search">
          <br /> <br />
          <h3 className="center code">Search</h3>
          <h5>
            <Search />
          </h5>
        </div>
        <button
          className="btn btn-floating yellow modal-trigger fixed-action-btn modal-btn"
          data-target="modal1">
          <span id="play">▶</span>
        </button>{" "}
        <br></br>
        {/* Modal content */}
          <Modal />
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
