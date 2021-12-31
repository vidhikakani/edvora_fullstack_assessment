import axios from "axios";

export const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon"

export const BASE_API_URL = "http://localhost:8000/api"

export const API = () => {
    const token = localStorage.getItem("token")
    return axios.create({
        headers: {
            authorization: `bearer ${token}`
        }
    })
}