const express = require("express");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

module.exports = {
    isAuthenticated: async (req, res, next) => {
        // console.log("is auth middle ware");
        if (!req.cookies.loggedIn) {
            res.status(401).json({
                profileUpdate: false,
                message: "invalid credentials",
            });
            return;
        }

        let decodedData = {};
        let userCookie = JSON.parse(req.cookies.loggedIn);
        let userToken = userCookie.token;

        ///VERIFY TOKEN
        try {
            decodedData = await jwt.verify(userToken, process.env.JWT_SECRET);
            // console.log("decodedData token is", decodedData);

            req.user = decodedData;
        } catch (error) {
            // console.log(error);
            res.status(401).json({
                profileUpdate: false,
                message: "Not Authorized",
            });
            return;
        }

        //all was good keep request going
        next();
    },
};
