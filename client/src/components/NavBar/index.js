import React from "react";
import Cart from "../Cart";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

export default function NavBar() {
  return (
    <div>
      <nav>
        <div class="nav-wrapper black">
          <Link to="/" class="brand-logo center logo">
            GAMARO
          </Link>
          <ul class="right" style={{ paddingRight: "15px" }}>
            <li>
              <Cart />
            </li>
            <li>
              <Link to="/login"> Login</Link>
            </li>
            <li>
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
            {/* <li><button class="btn green btn-flat"><a href="badges.html">[profile]</a></button></li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
