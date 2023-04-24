import axios from "axios";

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
function verifyEmail() {}

export const ProfileUpdateService = {
    updatePassword: async (data) => {
        const { newPassword, confirmNewPassword, oldPassword } = data;
        let response = {};

        try {
            if (!confirmStrings(newPassword, confirmNewPassword)) {
                throw Error("passwords dont match");
            }

            response = await axiosInstance.put("/api/profile/password", {
                newPassword,
                oldPassword,
            });
        } catch (error) {
            throw Error(error.message);
        }

        return response;
    },
    updateEmail: async (newEmail, confirmNewEmail) => {
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
        console.log(data);
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
            throw Error(error.message);
        }
    },
    updateDietaryPref: async (newDietPref) => {
        console.log("diet update");
        return;
    },
};
