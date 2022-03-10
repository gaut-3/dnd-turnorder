import axios from "axios";
const API_URL = "/api/auth/";
class AuthService {
    login(email: string, password: string) {
        return axios
            .post(API_URL + "signin", {
                email,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(email: string, password: string) {
        return axios.post(API_URL + "signup", {
            email,
            password,
            "role" : "admin",
        });
    }
    getCurrentUser() {
        const userStr = localStorage.getItem("user");
        if (userStr) return JSON.parse(userStr);
        return null;
    }
}
export default new AuthService();
