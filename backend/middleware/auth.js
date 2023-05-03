const express = require("express");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

module.exports = {
    isAuthenticated: async (req, res, next) => {
        // console.log("is auth middle ware");
        if (!req.cookies.loggedIn) {
            res.status(401).json({
                profileUpdate: false,
                message: "AUTH:invalid credentials",
            });
            return;
        }

        let decodedData = {};
        let userCookie = JSON.parse(req.cookies.loggedIn);

        let userToken = userCookie.token;

        ///VERIFY TOKEN
        try {
            console.log("auth: ", userCookie, process.env.JWT_SECRET);
            decodedData = await jwt.verify(userToken, process.env.JWT_SECRET, {
                algorithms: ["HS256"],
            });

            // verify user cookie and token match from user request
            if (userCookie.username !== decodedData.username) {
                throw Error("AUTH:credentials mismatch");
                return;
            }

            req.user = decodedData;
            //all was good keep request going
            next();
        } catch (error) {
            // console.log(error);
            res.status(401).json({
                profileUpdate: false,
                message: error.message,
                error: error,
                userToken,
                secret: process.env.JWT_SECRET,
                decodedData,
            });
            // res.status(401).json({
            //     profileUpdate: false,
            //     message: error.message,
            //
            // });
            return;
        }
    },
};
