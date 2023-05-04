import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className ="header"> 
      <Link className="link" to="/">Let’s Quiz Quizzical</Link>
      <hr /> 
    </div>
  );
};

export default Header;

