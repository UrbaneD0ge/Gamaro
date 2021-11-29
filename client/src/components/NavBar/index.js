import React from "react";
import Cart from "../Cart";

export default function NavBar() {
  return (
    <div>
      <nav>
        <div class="nav-wrapper black">
          <a href="#!" class="brand-logo center logo">
            GAMARO
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <Cart />
            </li>
            {/* <li><button class="btn green btn-flat"><a href="badges.html">[profile]</a></button></li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
