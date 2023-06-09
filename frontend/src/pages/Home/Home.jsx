import React from "react";
import PantryPalLogo from "../../assets/PantryPalAvo.png";
import PantryPalText from "../../assets/PantryPalText.png";
import { ImgContainer } from "./Home.styles";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
    return (
        <ImgContainer>
            <section className="about-container">
                <img
                    className="logo"
                    src={PantryPalLogo}
                    alt="Pantry Pal Logo"></img>

                <section>
                    <p>
                        <section className="about">
                            <p>
                                This project was organized by Danny Thompson and
                                Scott Thompson of Dallas Software Developers
                            </p>
                            <span>It was developed by:</span>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/jesusdoza/"
                                        target="_blank">
                                        <FontAwesomeIcon
                                            icon={faLinkedin}
                                            className="fontIcon"
                                        />
                                        Jesus Mendoza
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/damianpad/"
                                        target="_blank">
                                        <FontAwesomeIcon
                                            icon={faLinkedin}
                                            className="fontIcon"
                                        />
                                        Damian Padilla
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/amandapurcellperry/"
                                        target="_blank">
                                        <FontAwesomeIcon
                                            icon={faLinkedin}
                                            className="fontIcon"
                                        />
                                        Amanda Perry
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/walter-williams/"
                                        target="_blank">
                                        <FontAwesomeIcon
                                            icon={faLinkedin}
                                            className="fontIcon"
                                        />
                                        Walter Williams
                                    </a>
                                </li>
                            </ul>
                            <span>
                                Team Lead:{" "}
                                <a
                                    href="https://www.linkedin.com/in/bethanyann/"
                                    target="_blank">
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className="fontIcon"
                                    />
                                    Bethany Ann
                                </a>
                            </span>

                            <p>
                                With Pantry Pal, you can bid farewell to the
                                question, "What can I make with the ingredients
                                I have?" This app empowers you to create
                                delicious and satisfying recipes using the
                                ingredients already available in your pantry.
                                Simply input the ingredients you have on hand,
                                and the app swiftly sifts through its
                                comprehensive database to generate a
                                personalized list of recipes that you can whip
                                up in no time.
                            </p>
                        </section>
                    </p>

                    <div className="linkContainer">
                        <NavLink className="page linkItem" to="/signup">
                            SignUp
                        </NavLink>
                        <NavLink className="page linkItem" to="/login">
                            Login
                        </NavLink>
                    </div>
                    <a
                        href="https://github.com/jesusdoza/pantryPal"
                        target="_blank"
                        className="repo">
                        <FontAwesomeIcon icon={faGithub} className="fontIcon" />
                        Github Repo
                    </a>
                </section>
            </section>
        </ImgContainer>
    );
};

export default Home;
