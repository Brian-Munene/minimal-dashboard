import axios from "axios";

const DEV_API = 'https://gateway-service-5qoj75li4a-uc.a.run.app/api/v1/auth/'


class CountriesService {
    async getCountries() {
        const token = localStorage.getItem('token')
        return axios
            .get(`${DEV_API}countries`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response.data)
                return response.data
            })
            .catch(error=> {
                return error.response
            })
    }


    async updateCountry(data) {
        const token = localStorage.getItem('fmsToken')

        await axios.post(`${DEV_API}update-profile`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                return response
            })
            .catch(error => {
                return  error.response
            })
    }

}

export default new CountriesService();
