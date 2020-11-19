import * as axios from "axios";


const axiosInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "a50253f5-893a-40d8-8d68-f0f185ded4d4"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 100) {
        return axiosInstance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return axiosInstance
            .post(`follow/${userId}`)
    },
    unfollow(userId) {
        return axiosInstance
            .delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return axiosInstance
            .get(`profile/${userId}`);
    },
    getStatus(userId) {
        return axiosInstance
            .get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return axiosInstance
            .put(`profile/status/`, {status:status});
    },
}


export const authAPI = {
    authMe(userId) {
        return axiosInstance
            .get(`auth/me`);
    }
}
