import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_IP,
    headers: {
        "Content-Type": "application/json",
    },
});

export const ProfileUpdateService = {
    updatePassword: async (body) => {
        const { newpassword, oldpassword } = body;
        const response = await axiosInstance.put("/api/profile/password", {
            newpassword,
            oldpassword,
        });
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
