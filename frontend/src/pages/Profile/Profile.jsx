import React, { useRef, useState, useEffect } from "react";
import { Dashboard } from "./Profile.styles";
import Cookies from "js-cookie";

function ProfilePage() {
    return (
        <Dashboard>
            <section className="profile-page">
                <section className="container profile">
                    <picture>
                        {/* <source srcset="https://cdn.discordapp.com/attachments/1076184648599744674/1091575853470732288/PantryPal_Logo_TPB.png"></source> */}
                        <source srcset="https://media.discordapp.net/attachments/1076184648599744674/1091475961280741426/EggMoonSnap.png?width=493&height=487"></source>
                        <img src="/src/assets/spoon.png" alt="user avatar" />
                    </picture>
                    <h3>Hi! Bob</h3>
                    <h3>Email@email.com</h3>
                </section>
                <section className="container app-config">
                    <section>
                        <h4>Your Dietary Preferences</h4>
                        <ul className="app-pref">
                            <li>
                                <div>
                                    <span>Gluten Free</span>
                                </div>
                            </li>
                            <li>Ketogenic</li>
                            <li>Vegetarian</li>
                            <li>Lacto-Vegetarian</li>
                            <li>Ovo-Vegetarian</li>
                            <li>Vegan</li>
                            <li>Pescetarian</li>
                            <li>Paleo</li>
                            <li>Primal</li>
                        </ul>
                        <div className="controls">
                            <span className="btn">
                                Update Dietary Preferences
                            </span>
                        </div>
                    </section>
                    <ul className="options">
                        <li className="btn">
                            <span>Update Caloric settings</span>
                        </li>
                        <li className="btn">
                            <span>Update Email</span>
                        </li>
                        <li className="btn">
                            <span>Update Password</span>
                        </li>
                    </ul>
                </section>
            </section>
        </Dashboard>
    );
}

export default ProfilePage;
