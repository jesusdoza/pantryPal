import React, { useState }from "react";
import { Nav } from './NavBar.styles.js';
import PantryPal from '../../assets/PantryPalWhite.png';
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie"; // Import Cookies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import { userContext } from "../../context/userContext.jsx";

const NavBar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const isLoggedIn = Cookies.get("loggedIn");
  // console.log("userProfile in navbar console.log", userProfile); //! placeholder need to implement

  const handleLogout = () => {
    Cookies.remove("loggedIn");
    navigate("/login");
  };

  const toggleState = () => {
    setToggleNav(!toggleNav);
    console.log(`Nav Open: ${toggleNav}`);
    console.log(`Cross: ${toggleNav}`);
   
  };   

  return (
    <Nav className="main-nav">
      {isLoggedIn ? (
        <>
        <div className="nav-bar">

        <NavLink className="page" to="/" activeclassname="active">
            <img className="logo" src={PantryPal} alt="PantryPal Egg logo"></img>
          </NavLink>

          <div className="nav-item-container">
          <NavLink className="page nav-item" to="/search" >Search</NavLink>

          <NavLink className="page nav-item" to="/saved">Saved</NavLink>

          <NavLink className="page nav-item" to="/mealPlanner">Meal Planner</NavLink>
          </div>


          <div className="user-container">
            <NavLink
              className="page nav-item "
              to="/login"
              onClick={handleLogout}>
              Logout
            </NavLink>
            <NavLink className="page nav-item" to="/profile">
              <FontAwesomeIcon icon={faUser} className="userIcon"/>
            </NavLink>
          </div>

          <NavLink  className={toggleNav ? 'hamburger close' : 'hamburger'} onClick={toggleState}>
            <span className="meat"></span>
            <span className="meat"></span>
            <span className="meat"></span>
            <span className="meat"></span>
          </NavLink>

          <nav className={toggleNav ? 'mobile-nav-container mobile-height' : 'mobile-nav-container'}>
              {toggleNav && (
                <nav className="nav-width">
                  <NavLink className="mobile-nav toggleNav && 'active'" to="/search" onClick={toggleState}>Search</NavLink>

                  <NavLink className="mobile-nav" to="/saved" onClick={toggleState}>Saved</NavLink>

                  <NavLink className="mobile-nav" to="/mealPlanner" onClick={toggleState}>Meal Planner</NavLink>

                  <NavLink className="mobile-nav" to="/login" onClick={handleLogout}>Logout</NavLink>

                  <NavLink className="page mobile-nav" to="/profile" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faUser} className="userIcon mobile-nav"/>
                  </NavLink>
                </nav>
              )}
            </nav>
        </div> 
        </>
      ) : (
        <>  
            <NavLink className="page" to="/signup">
              SignUp
            </NavLink>

            <NavLink className="page" to="/login">
              Login
            </NavLink>
          </>
            ) } 
        </Nav>
        
    );
};

export default NavBar;
