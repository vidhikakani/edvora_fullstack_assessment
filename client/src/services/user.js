import axios from "axios"
import qs from "qs"
import { BASE_API_URL } from "."

export const signin = async (userData) => {
    const SIGNIN_URL = `${BASE_API_URL}/users/login`
    console.log(userData)
    try {
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(userData),
            url: SIGNIN_URL,
        };
        const { data: { token_type, access_token } } = await axios(options)
        localStorage.setItem("token", access_token)
        const ME_URL = `${BASE_API_URL}/users/me`
        const headers_new = {
            authorization: `${token_type} ${access_token}`
        }
        const { data } = await axios.get(ME_URL, { headers: headers_new })
        return { key: "success", data }
    } catch (error) {
        localStorage.removeItem("token")
        const { response: { data: { detail } } } = error
        return { key: "error", detail }
    }
}

export const signup = async (userData) => {
    const SIGNUP_URL = `${BASE_API_URL}/users/signup`
    try {
        const { data } = await axios.post(SIGNUP_URL, userData)
        localStorage.setItem("token", data.access_token)
        return { key: "success" }
    } catch (error) {
        localStorage.removeItem("token")
        const { response: { data: { detail } } } = error
        return { key: "error", detail }
    }

}