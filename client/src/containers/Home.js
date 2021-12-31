import React, { useEffect, useState } from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import PokemonCard from '../components/PokemonCard'
import { fetchAllPokemons } from '../services/pokemon'

const Home = () => {
    const [pokemonData, setPokemonData] = useState([])
    const [next, setNext] = useState(null)
    useEffect(() => {
        async function fetchAll() {
            const { nextUrl, pokemon_data } = await fetchAllPokemons(next)
            const pokemons = pokemonData.concat(pokemon_data)
            setPokemonData(pokemons)
            setNext(nextUrl)
        }
        fetchAll()

        return () => setPokemonData([])
    }, [])

    const loadMoreHandler = async () => {
        const { nextUrl, pokemon_data } = await fetchAllPokemons(next)
        const pokemons = pokemonData.concat(pokemon_data)
        setPokemonData(pokemons)
        setNext(nextUrl)
    }

    return (
        <div>
            <Row xs={1} md={5} className="g-4 m-2">
                {
                    pokemonData.map(pokemon => (
                        <Col key={pokemon.id}>
                            <PokemonCard pokemon={pokemon} />
                        </Col>
                    ))
                }
            </Row>
            <Row xs={1} className="g-4 mt-2 mb-3">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="primary" size="lg" onClick={loadMoreHandler}>
                        Load More
                    </Button>
                </div>
            </Row>
        </div>
    )
}

export default Home
