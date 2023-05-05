import React, { useRef, useState, useEffect } from "react";
import { StyledSignup } from "./Login.styles.jsx";
import Cookies from "js-cookie";

function LoginScreen() {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:4000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => {
                console.log("response is ", response);
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Invalid username or password");
                }
            })

            .then((data) => {
                // Cookies.set(
                //     "loggedIn",
                //     JSON.stringify({
                //         token: data.token,
                //         username: username,
                //     })
                // );
                // debugger;
                console.log("done loging in");
                window.location.href = "/search";
            })
            .catch((error) => {
                console.error("Login failed:", error);
                setError(error.message);
            });
    };

    return (
        <StyledSignup>
            <section className="form-sect">
                <form onSubmit={handleSubmit}>
                    <div className="title">
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
