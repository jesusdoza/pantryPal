import React from "react";
import { Nav } from "./NavBar.styles.js";
import PantryPal from "../../assets/PantryPalAvo.png";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie"; // Import Cookies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import { userContext } from "../../context/userContext.jsx";

const NavBar = () => {
    const { isLoggedIn, userProfile } = useContext(userContext);

    console.log("userProfile", userProfile); //! placeholder need to implement

    const handleLogout = () => {
        Cookies.remove("loggedIn");
        navigate("/login");
    };

    return (
        <Nav>
            {isLoggedIn ? (
                <>
                    <NavLink className="page" to="/" activeclassname="active">
                        <img
                            className="logo"
                            src={PantryPal}
                            alt="PantryPal Egg logo"></img>
                    </NavLink>

                    <NavLink className="page" to="/search">
                        Search
                    </NavLink>

                    <NavLink className="page" to="/saved">
                        Saved
                    </NavLink>

                    <NavLink className="page" to="/mealPlanner">
                        Meal Planner
                    </NavLink>

                    <NavLink
                        className="page"
                        to="/login"
                        onClick={handleLogout}>
                        Logout
                    </NavLink>

                    <NavLink className="page" to="/profile">
                        <FontAwesomeIcon icon={faUser} className="userIcon" />
                    </NavLink>
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
            )}
        </Nav>
    );
};

export default NavBar;
