import axios from "axios";

export const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon"

export const BASE_API_URL = "http://localhost:8000/api"

export default axios.create({
    headers: {
        authorization: `bearer ${localStorage.getItem("token")}`
    }
});