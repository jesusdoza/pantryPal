import React from "react";
import { Navigate } from "react-router-dom";

import { useContext } from "react";
import { userContext } from "../../context/userContext.jsx";

export default function Protected({ children }) {
    const { isLoggedIn } = useContext(userContext);
    return isLoggedIn ? <>{children}</> : <Navigate to="/login" />;
}
