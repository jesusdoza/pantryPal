const express = require("express");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

module.exports.isAuthenticated = async (req, res, next) => {
    const JWT_SECRET = process.env.JWT_SECRET;
    // console.log("is auth middle ware");
    if (!req.cookies.loggedIn) {
        res.status(401).json({
            profileUpdate: false,
            message: "AUTH:invalid credentials",
        });
        return;
    }

    let decodedData = {};
    console.log("cookies: ", req.cookies);
    let userCookie = JSON.parse(req.cookies.loggedIn);

    let userToken = userCookie.token;

    ///VERIFY TOKEN
    try {
        console.log("auth: ", userCookie, JWT_SECRET, typeof JWT_SECRET);

        decodedData = verifyToken(userToken, JWT_SECRET);

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
            secret: JWT_SECRET,
            error: error,
            userToken,
            decodedData,
            userCookie,
        });
        // res.status(401).json({
        //     profileUpdate: false,
        //     message: error.message,
        //
        // });
        return;
    }
};
function verifyToken(token, secret) {
    try {
        const decodedData = jwt.verify(token, secret);
        // const decodedData = jwt.verify(token, secret, {
        //     algorithms: ["HS256"],
        //     allowInvalidAsymmetricKeyTypes: true,
        // });
        console.log(
            "verify token is valid",
            decodedData,
            "token:",
            token,
            "secret: ",
            secret
        );
        return decodedData;
    } catch (error) {
        throw error;
    }
}

module.exports.createToken = async function (secret, payload) {
    const data = await JSON.stringify(payload);
    // const token = jwt.sign(data, secret, {
    //     algorithm: "HS256",
    //     allowInvalidAsymmetricKeyTypes: true,
    // });
    const token = jwt.sign(data, secret);

    return token;
};
