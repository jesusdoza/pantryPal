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
                const username = response.data.username;
                const token = response.data.token;
                await updateLoginCookie(username, token);
            }
        } catch (error) {
            throw Error(error.response.data.message);
        }

        //return response all ok
        return response;
    },

    updateEmail: async (data) => {
        const { newEmail, confirmNewEmail } = data;
        let response = {};
        try {
            if (!confirmStrings(newEmail, confirmNewEmail)) {
                throw Error("emails dont match");
            }

            response = await axiosInstance.put("/api/profile/email", {
                newEmail,
                confirmNewEmail,
            });
            return response;
        } catch (error) {
            throw Error(error.message);
        }
    },
    updateCaloric: async (data) => {
        console.log("update caloric data ", data);
        const { newCaloricValue } = data;
        let response = {};
        let newValue = Number(newCaloricValue);
        try {
            if (isNaN(newValue)) {
                throw Error("not a number");
            }

            response = await axiosInstance.put("/api/profile/caloricpref", {
                newValue,
            });
            return response;
        } catch (error) {
            // throw Error(error.message);
            throw Error(error.response.data.message);
        }
    },

    updateDietaryPref: async (newDietPref) => {
        console.log("diet update");
        return;
    },
};
