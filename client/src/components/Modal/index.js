import M from "materialize-css";
import Sell from "../Sell/index";
import Profile from "../profile/index";

document.addEventListener("DOMContentLoaded", () => {
  const modInit = document.getElementById("modal1");
  M.Modal.init(modInit);
});

const Modal = () => {
  return (
    <div id="modal1" className="modal">
      <div id="modal-header">
        <h1 className="logo center">START</h1>
      </div>
      <div id="pad" className="container">
        <div className="row d-flex">
          <div className="col">
            <button className="btn btn-floating red"></button>
            <h5 className="logo">Buy</h5>
            <Sell>
              <button className="btn btn-floating blue"></button>
              <h5 className="logo">Sell</h5>
            </Sell>
          </div>
          <div className="row">
            <Profile>
              <button className="btn btn-floating green"></button>
              <h5 className="logo">Profile</h5>
            </Profile>
            <button className="btn btn-floating yellow"></button>
            <h5 className="logo">Review</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
