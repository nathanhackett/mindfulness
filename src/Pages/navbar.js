import React from "react";

import { AccountCircle } from "@material-ui/icons";

function Navbar() {
  return (
    <nav className="navbar">
      {/* https://getbootstrap.com/docs/5.0/components/navbar/ */}
      <span>
        <img src="MMpng.png" alt="MM" height="60px" width="60px" />
      </span>
      <span className="navbar-brand mb-0 h1">
        {window.location.pathname}
        <AccountCircle fontSize="large" />
      </span>
    </nav>
  );
}
export default Navbar;
