import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import RecipeSearch from "./pages/RecipeSearch/RecipeSearch";
import Saved from "./pages/Saved/Saved";

import Login from "./pages/Login/Login";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import MealPlanner from "./pages/mealPlanner/mealPlanner";
import { GlobalStyle } from "./GlobalStyles";
import ProfilePage from "./pages/Profile/Profile";

function App() {
    return (
        <div className="App">
            <header>
                <NavBar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<RecipeSearch />} />
                    <Route path="/details" element={<RecipeDetails />} />
                    <Route path="/saved" element={<Saved />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/mealPlanner" element={<MealPlanner />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/*" element={<h1>404 no page</h1>} />
                </Routes>
                <GlobalStyle />
            </main>
        </div>
    );
}

export default App;
