const express = require("express");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

module.exports.isAuthenticated = async (req, res, next) => {
    const JWT_SECRET = process.env.JWT_SECRET;
    // console.log("is auth middle ware", JWT_SECRET);
    if (!req.signedCookies.loggedIn) {
        res.status(401).json({
            profileUpdate: false,
            message: "AUTH:invalid credentials",
        });
        return;
    }

    let decodedData = {};

    // let userCookie = JSON.parse(req.cookies.loggedIn);//! old
    // console.log("cookies: ", req.signedCookies.loggedIn);
    let userCookie = JSON.parse(req.signedCookies.loggedIn);

    let userToken = userCookie.token;
    // decodedData = verifyToken(userToken, JWT_SECRET);
    // console.log(decodedData);

    // ///VERIFY TOKEN
    try {
        // console.log("auth: ", userCookie, JWT_SECRET);

        decodedData = verifyToken(userToken, JWT_SECRET);

        console.log("decoded", decodedData);

        req.user = decodedData;
        //all was good keep request going
        next();
    } catch (error) {
        // console.log(error);
        res.status(401).json({
            profileUpdate: false,
            message: error.message,
            decodedData,
            userToken,
            JWT_SECRET,
        });
    }

    return;
};
function verifyToken(token, secret) {
    try {
        // const utf8Secret = utf8.encode(secret);
        let utf8Secret = Buffer.from(secret, "utf-8").toString();
        const decodedData = jwt.verify(token, utf8Secret, {
            algorithms: ["HS256"],
            allowInvalidAsymmetricKeyTypes: true,
        });
        // console.log(
        //     "verify token is valid",
        //     decodedData,
        //     "token:",
        //     token,
        //     "secret: ",
        //     secret
        // );
        return decodedData;
    } catch (error) {
        throw error;
    }
}

module.exports.createToken = async function (secret, payload) {
    const data = await JSON.stringify(payload);
    let utf8Secret = Buffer.from(secret, "utf-8").toString();
    const token = jwt.sign(data, utf8Secret, {
        algorithm: "HS256",
        allowInvalidAsymmetricKeyTypes: true,
    });
    // const token = jwt.sign(data, utf8Secret);

    return token;
};
