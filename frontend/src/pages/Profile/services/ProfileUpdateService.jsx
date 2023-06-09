import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_IP,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

function confirmStrings(password1, password2) {
    return password1 === password2;
}
function verifyEmail(emailStr) {
    const emailRegex = new RegExp(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    return emailRegex.test(emailStr);
}

export async function updateLoginCookie(username, token) {
    const cookieBody = await JSON.stringify({
        token: token,
        username: username,
    });

    Cookies.set("loggedIn", cookieBody);
    // Cookies.remove("loggedIn");
    Cookies.set("loggedIn", cookieBody);
    return;
}

export const ProfileUpdateService = {
    updatePassword: async (data) => {
        const { newPassword, confirmNewPassword, oldPassword } = data;
        let response = {};

        //form validation
        try {
            if (!confirmStrings(newPassword, confirmNewPassword)) {
                throw Error("passwords dont match");
            }
        } catch (error) {
            console.log("password confirm error");
            throw Error(error.message);
        }

        // request and token update
        try {
            response = await axiosInstance.put("/api/profile/password", {
                newPassword,
                oldPassword,
            });

            if (response.data.profileUpdate) {
                console.log("token update ");
                const username = response.data.username;
                const token = response.data.token;
                await updateLoginCookie(username, token);
            }
        } catch (error) {
            console.log("server request sent and error");
            throw Error(error.response.data.message);
        }

        //return response all ok
        console.log("password update success");
        return response;
    },

    updateEmail: async (data) => {
        const { newEmail, confirmNewEmail } = data;
        let response = {};
        console.log("update email service front");
        try {
            if (!confirmStrings(newEmail, confirmNewEmail)) {
                throw Error("emails dont match");
            }

            if (!verifyEmail(newEmail)) {
                throw Error("emails improper format");
            }

            response = await axiosInstance.put("/api/profile/email", {
                newEmail,
                confirmNewEmail,
            });
            return response;
        } catch (error) {
            if (error.response) {
                throw Error(error.response.data.message);
            } else {
                throw Error(error.message);
            }
        }
    },
    updateCaloric: async (data) => {
        console.log("update caloric data ", data);
        const { newCaloricPref } = data;
        let response = {};
        console.log(newCaloricPref);
        let newValue = Number(newCaloricPref);
        try {
            if (isNaN(newValue)) {
                throw Error("not a number");
            }

            response = await axiosInstance.put("/api/profile/caloricpref", {
                newCaloricPref: newValue,
            });
            return response;
        } catch (error) {
            if (error.response) {
                throw Error(error.response.data.message);
            } else {
                throw Error(error.message);
            }
        }
    },

    updateDietaryPref: async (newDietPref) => {
        console.log("diet update");
        return;
    },
};
