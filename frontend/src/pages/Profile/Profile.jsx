import React, { useRef, useState, useEffect } from "react";
import { Dashboard } from "./Profile.styles";
import Cookies from "js-cookie";

function ProfilePage() {
    return (
        <Dashboard>
            <aside className="diet-container">
                <h3>Diet preferences</h3>
                <section>
                    <select name="diet" id="diet">
                        <option value="gluten free">Gluten Free</option>
                        <option value="ketogenic">Ketogenic</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="lacto vegetarian">
                            Lacto-Vegetarian
                        </option>
                        <option value="ovo-vegetarian">Ovo-Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="pescetarian">Pescetarian</option>
                        <option value="paleo">Paleo</option>
                        <option value="primal">Primal</option>
                        <option value="lacto vegetarian">Low FODMAP</option>
                        <option value="Whole30">Whole30</option>
                    </select>
                    <ul>
                        <li>Veggy</li>
                    </ul>
                </section>
            </aside>
            <main className="">
                <section className="recipes-container">
                    <h3>Saved Recipes</h3>
                    <section>
                        <ul className="">
                            <li className="recipe">RECIPE1</li>
                            <li className="recipe">RECIPE1</li>
                            <li className="recipe">RECIPE1</li>
                            <li className="recipe">RECIPE1</li>
                        </ul>
                    </section>
                    <section>
                        <span>add recipe +</span>
                    </section>
                </section>
            </main>
        </Dashboard>
    );
}

export default ProfilePage;
