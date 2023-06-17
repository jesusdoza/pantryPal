const fs = require("fs");
const path = require("path");

const envFile = path.normalize("./env.production");
const newEnvFile = path.normalize("./frontend/env.production");

if (fs.existsSync(newEnvFile)) {
    console.log("env file exists");
    fs.copyFile(envFile, newEnvFile, () => {
        console.log("secret file copied");
    });

    return;
}
console.log("no file exists");
