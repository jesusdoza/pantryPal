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
import UserContextProvider from "./context/userContext";

import Protected from "./components/Protected/Protected";

function App() {
    return (
        <UserContextProvider>
            <div className="App">
                <header>
                    <NavBar />
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/search"
                            element={
                                <Protected>
                                    <RecipeSearch />
                                </Protected>
                            }
                        />
                        <Route
                            path="/details"
                            element={
                                <Protected>
                                    <RecipeDetails />
                                </Protected>
                            }
                        />
                        <Route
                            path="/saved"
                            element={
                                <Protected>
                                    <Saved />
                                </Protected>
                            }
                        />

                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/mealPlanner"
                            element={
                                <Protected>
                                    <MealPlanner />
                                </Protected>
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                <Protected>
                                    <ProfilePage />
                                </Protected>
                            }
                        />
                        <Route path="/*" element={<h1>404 no page</h1>} />
                    </Routes>
                    <GlobalStyle />
                </main>
            </div>
        </UserContextProvider>
    );
}

export default App;
