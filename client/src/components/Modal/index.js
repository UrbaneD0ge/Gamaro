import M from "materialize-css";

document.addEventListener('DOMContentLoaded', () => {
  const modInit = document.getElementById("modal1");
  M.Modal.init(modInit);
})

const Modal = () => {
  return (
  <div id="modal1" className="modal">
    <div id="modal-header">
      <h1 className="code center">START</h1>
    </div>
    <div id="pad" className="container">
      <div className="row">
        <div className="col">
          <a href='/Buy'>
          <button className="btn btn-floating red"></button>
          <h5 className="logo">Buy</h5></a>
          <a href='/Sell'>
          <button className="btn btn-floating blue"></button>
          <h5 className="logo">Sell</h5></a>
        </div>
        <div className="col">
          <a href='/Profile'>
          <button className="btn btn-floating green"></button>
          <h5 className="logo">Profile</h5></a>
          <a href='/Review'>
          <button className="btn btn-floating yellow"></button>
          <h5 className="logo">Review</h5></a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Modal;