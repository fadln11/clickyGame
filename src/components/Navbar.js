import React from "react";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
    <a className="navbar-brand mr-5" href="/" id="logo"><h3>Clicky Game</h3></a>
    <h5 className="navbar-brand">{props.message}</h5>
    <h4 className="ml-auto mt-2" id="counters">
      Score: {props.score} | Top score: {props.topScore}
    </h4>

  </nav>
)

export default Navbar;