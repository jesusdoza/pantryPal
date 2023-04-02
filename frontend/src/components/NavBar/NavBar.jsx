import React from "react";
import { Nav } from './NavBar.styles.js';
import PantryPal from '../../assets/PantryPal.png';
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

      {isLoggedIn ? (
        <>
          <NavLink className="page" to="/" activeclassname="active">
            <img className="logo" src={PantryPal} alt="PantryPal Egg logo"></img>
          </NavLink>

          <NavLink className="page" to="/search">Search</NavLink>

          <NavLink className="page" to="/saved">Saved</NavLink>

          <NavLink className="page" to="/mealPlanner">Meal Planner</NavLink>

          <NavLink className="page" to="/profile">Profile</NavLink>

          <NavLink className="page" to="/login" onClick={handleLogout}>Logout</NavLink>

        </>
      ) : (
        <>

          <NavLink className="page" to="/signup">SignUp</NavLink>

          <NavLink className="page" to="/login">Login</NavLink>

        </>
      )}

    </Nav>
  );
};

export default NavBar;