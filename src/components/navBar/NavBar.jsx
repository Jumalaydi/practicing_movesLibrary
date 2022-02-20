import React from "react";
import { Link } from "react-router-dom";
// style
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="container">
      <div className="header">
        <p>Welcome To My Moves</p>
        <p>
          <Link to="/EnterMove">Enter Move U Want To Add</Link>
        </p>
      </div>
    </div>
  );
};

export default NavBar;
