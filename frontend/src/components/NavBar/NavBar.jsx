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
      <div className="navigation">
        <NavLink to="/" activeclassname="active">
          Home
        </NavLink>

        {isLoggedIn ? (
          <>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/saved">Saved</NavLink>
            <NavLink to="/mealPlanner">Meal Planner</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/login" onClick={handleLogout}>Logout</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/signup">SignUp</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </div>
    </Nav>
  );
};

export default NavBar;
