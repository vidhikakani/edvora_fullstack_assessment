import React from 'react'
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const PokemonCard = (props) => {
    const { pokemon: { name, height, weight, types, sprites, order } } = props
    const pokemon_name = `${name[0].toUpperCase()}${name.substring(1)}`
    return (
        <Card>
            <Card.Header>{pokemon_name}</Card.Header>
            <Card.Img variant="top" src={sprites["front_default"]} />
            <ListGroup className="list-group-flush">
                <ListGroupItem>Rank: {order}</ListGroupItem>
                <ListGroupItem>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Height: {height}</span>
                        <span>Weight: {weight}</span>
                    </div>
                </ListGroupItem>
            </ListGroup>
            <Card.Body>
                <div xs={1} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="primary">View</Button>
                    <Button variant="primary">Add to Favorites</Button>
                </div>

            </Card.Body>
        </Card>
    )
}

export default PokemonCard
