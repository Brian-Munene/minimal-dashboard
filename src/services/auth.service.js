import axios from "axios";

const DEV_API = 'https://gateway-service-5qoj75li4a-uc.a.run.app/api/v1/auth/'


class AuthService {
    async login(user) {
        return axios
            .post(`${DEV_API}login`, user)
            .then(response => {
                return response.data
            })
            .catch(error=> {
                console.log(error.response)
                return error.response
            })
    }

    logout(){
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }
    async updateProfile(data) {
        const token = localStorage.getItem('token')
        await axios.post(`${DEV_API}update-profile`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response)
                return response
            })
            .catch(error => {
                return  error.response
            })
    }

}

export default new AuthService();
