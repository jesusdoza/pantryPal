import { createContext, useState } from "react";

export const userContext = createContext({});

export default function UserContextProvider({ children }) {
    const [userProfile, setUserProfile] = useState({
        dietaryPref: [
            { dietPrefId: "abc", displayName: "diet name", tag: "tag in data" },
        ],
        caloricPref: 2000,
        email: "email@email.com",
        username: "username HERE",
        avatar: "URL OF AVATAR",
        id: "00000",
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function updateProfile() {}
    function updateLoginStatus(isLoggedIn) {
        setIsLoggedIn(isLoggedIn);
    }

    const contextValues = {
        userProfile,
        isLoggedIn,
        updateLoginStatus,
    };

    return (
        <userContext.Provider value={contextValues}>
            {children}
        </userContext.Provider>
    );
}
