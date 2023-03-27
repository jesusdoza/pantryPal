import React from "react";
import { Nav } from './NavBar.styles.js';
import Spoon from '../../assets/Spoon.png';
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie"; // Import Cookies

const NavBar = () => {
  const isLoggedIn = Cookies.get("loggedIn");

  const handleLogout = () => {
    Cookies.remove("loggedIn");
    navigate("/login");
  };



  return (
    <Nav>
      <div>
        <img className="logo" src={Spoon} alt="spoon app logo"></img>
      </div>
      <ul className="navigation">
        <li>
          <NavLink className="page" to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <NavLink className="page" to="/search">Search</NavLink>
            </li>
            <li>
              <NavLink className="page" to="/saved">Saved</NavLink>
            </li>
            <li>
              <NavLink className="page" to="/mealPlanner">Meal Planner</NavLink>
            </li>
            <li>
              <NavLink className="page" to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink className="page" to="/login" onClick={handleLogout}>Logout</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink className="page" to="/signup">SignUp</NavLink>
            </li>
            <li>
              <NavLink className="page" to="/login">Login</NavLink>
            </li>
          </>
        )}
      </ul>
    </Nav>
  );
};

export default NavBar;
