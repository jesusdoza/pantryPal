import React, { useRef, useState, useEffect } from "react";
import { Dashboard } from "./Profile.styles";
import Cookies from "js-cookie";

function ProfilePage() {
    return (
        <Dashboard>
            <section className="profile-page">
                <section className="container profile">
                    <picture>
                        <img src="/src/assets/Spoon.png" alt="user avatar" />
                    </picture>
                    <h3>Hi! Bob</h3>
                    <h3>Email@email.com</h3>
                    <h4>Your Dietary Preferences</h4>
                    <ul className="app-pref">
                        <li value="gluten free">Gluten Free</li>
                        <li value="ketogenic">Ketogenic</li>
                        <li value="vegetarian">Vegetarian</li>
                        <li value="lacto vegetarian">Lacto-Vegetarian</li>
                        <li value="ovo-vegetarian">Ovo-Vegetarian</li>
                        <li value="vegan">Vegan</li>
                        <li value="pescetarian">Pescetarian</li>
                        <li value="paleo">Paleo</li>
                        <li value="primal">Primal</li>
                    </ul>
                </section>
                <section className="container app-config">
                    <ul className="options">
                        <li className="btn">
                            <span>Update Caloric settings</span>
                        </li>
                        <li className="btn">
                            <span>Update Dietary Preferences</span>
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
