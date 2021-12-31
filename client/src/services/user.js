import axios from "axios"
import qs from "qs"
import { BASE_API_URL } from "."

export const signin = async (userData) => {
    const SIGNIN_URL = `${BASE_API_URL}/users/login`
    try {
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(userData),
            url: SIGNIN_URL,
        };
        const { data: { token_type, access_token } } = await axios(options)
        localStorage.setItem("token", access_token)
        const { user } = await getUser(access_token, token_type)
        return { key: "success", user }
    } catch (error) {
        localStorage.removeItem("token")
        const { response: { data: { detail } } } = error
        return { key: "error", detail }
    }
}

export const signup = async (userData) => {
    const SIGNUP_URL = `${BASE_API_URL}/users/signup`
    try {
        const { data: { access_token, token_type } } = await axios.post(SIGNUP_URL, userData)
        localStorage.setItem("token", access_token)
        const { user } = await getUser(access_token, token_type)
        return { key: "success", user }
    } catch (error) {
        localStorage.removeItem("token")
        const { response: { data: { detail } } } = error
        return { key: "error", detail }
    }
}

export const getUser = async (access_token, token_type) => {
    const ME_URL = `${BASE_API_URL}/users/me`
    const headers_new = {
        authorization: `${token_type} ${access_token}`
    }
    const { data } = await axios.get(ME_URL, { headers: headers_new })
    return { user: data }
}

export const addFavoritePokemon = async (favoritePokemon) => {
    const pokemon_url = `${BASE_API_URL}/favorites/add-favorite-pokemon`
    const access_token = localStorage.getItem("token")
    const headers = {
        authorization: `bearer ${access_token}`
    }
    try {
        const response = await axios.post(pokemon_url, favoritePokemon, { headers: headers })
        const { favorites } = await fetchMyFavoritePokemons()
        return favorites
    } catch (error) {
        console.log(error.response.data)
    }
}

export const fetchMyFavoritePokemons = async (access_token) => {
    const pokemon_url = `${BASE_API_URL}/favorites/get-favorite-pokemons`
    const token = access_token ? access_token : localStorage.getItem("token")
    const headers = {
        authorization: `bearer ${token}`
    }
    try {
        const { data } = await axios.get(pokemon_url, { headers: headers })
        return { favorites: data }
    } catch (error) {
        console.log(error.response.data)
    }
}

export const removeFavoritePokemon = async (favoritePokemon) => {
    const pokemon_url = `${BASE_API_URL}/favorites/remove-favorite-pokemon`
    const access_token = localStorage.getItem("token")
    const headers = {
        authorization: `bearer ${access_token}`
    }
    try {
        const { data } = await axios.post(pokemon_url, favoritePokemon, { headers: headers })
        return data
    } catch (error) {
        console.log(error.response.data)
    }
}