import M from "materialize-css";

const modInit = document.getElementById("modal1");
M.Modal.init(modInit);

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
  </div>
  )
}

export default Modal;