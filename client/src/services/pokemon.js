import axios from 'axios'
import { POKEMON_URL } from '.'

export const fetchAllPokemons = async (url) => {
    const pokemon_url = url ? url : POKEMON_URL
    const { data: { next, results } } = await axios.get(pokemon_url)
    const pokemon_data = []
    for (let i = 0; i < results.length; i++) {
        const { url } = results[i]
        const { data } = await axios.get(url)
        pokemon_data.push(data)
    }
    return { nextUrl: next, pokemon_data }
}
