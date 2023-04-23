import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_IP,
    headers: {
        "Content-Type": "application/json",
    },
});

function confirmPasswords(password1, password2) {
    return password1 === password2;
}

export const ProfileUpdateService = {
    updatePassword: async (body) => {
        const { newPassword, confirmNewPassword, oldPassword } = body;
        let response = {};

        try {
            if (!confirmPasswords(newPassword, confirmNewPassword)) {
                throw Error("passwords dont match");
            }

            response = await axiosInstance.put("/api/profile/password", {
                newPassword,
                oldPassword,
            });
        } catch (error) {
            return { err: error.message };
        }

        return response;
    },
    updateEmail: async () => {
        return;
    },
    updateCaloric: async () => {
        return;
    },
    updateDietaryPref: async () => {
        return;
    },
};
