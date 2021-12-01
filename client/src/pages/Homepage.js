import React from "react";
import NavBar from "../components/NavBar";
import Search from "../components/SearchBar";
import Feed from "../components/Feed";
import Modal from "../components/Modal";

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
          data-target="modal1"
        >
          <span id="play">▶</span>
        </button>{" "}
        <br></br>
        {/* Modal content */}
        <Modal />
        {/* End Modal */}
        <div className="feed s9">
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Home;
