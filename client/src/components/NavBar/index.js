import React from "react";
import Cart from "../Cart";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <div class="nav-wrapper black">
          <a href="#!" class="brand-logo center logo">
            GAMARO
          </a>
          <ul class="right" style={{ paddingRight: "15px" }}>
            <li>
              <Cart />
            </li>
            <li>
              <Link to="/login"> Login</Link>
            </li>
            {/* <li><button class="btn green btn-flat"><a href="badges.html">[profile]</a></button></li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
