import React, { useRef, useState, useEffect } from "react";
import { StyledSignup } from "./Login.styles.jsx";
import Cookies from "js-cookie";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/userContext.jsx";

function LoginScreen() {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const { userProfile, isLoggedIn, setIsLoggedIn, setUserProfile } =
        useContext(userContext);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const axiosResponse = await axios.post(
                `${import.meta.env.VITE_API_IP}/api/login`,
                { username, password },
                { crossDomain: true, withCredentials: true }
            );

            const loginData = axiosResponse.data;

            setIsLoggedIn(true);
            setUserProfile((state) => {
                const updateUserProfile = loginData.userProfile
                    ? { ...state, ...loginData.userProfile }
                    : state;
                return updateUserProfile;
            });

            navigate("/search");
        } catch (error) {
            setIsLoggedIn(false);
            console.log(error);
        }
    };

    return (
        <StyledSignup>
            <section className="form-sect">
                <form onSubmit={handleSubmit}>
                    <div className="title">
                        <div>{isLoggedIn && "logged in"}</div>
                        <h2>Welcome Back!</h2>
                    </div>

                    {error && (
                        <div className="error-container">
                            <div className="error-desc">
                                <span className="error-marker">&#x26A0;</span>{" "}
                                {error}
                            </div>
                        </div>
                    )}
                    <div className="input-container">
                        <label className="input-tag" htmlFor="username">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Username"
                            ref={usernameRef}
                            value={username}
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-tag" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            ref={passwordRef}
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            required
                        />
                    </div>
                    <div className="submit-btn">
                        <button type="submit" className="btn">
                            Sign In
                        </button>
                    </div>
                </form>
            </section>
        </StyledSignup>
    );
}

export default LoginScreen;
