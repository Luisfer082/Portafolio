import React from 'react'
import { CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'

function CardsTec(props) {
  return (
    <CardGroup className='card hover-grow' key={props.id}>
        <Card.Img variant="top" src={props.imagen} />
        <Card.Body>
        <Card.Title>{props.tecnologia}</Card.Title>
        </Card.Body>
    </CardGroup>
  )
}

export default CardsTec