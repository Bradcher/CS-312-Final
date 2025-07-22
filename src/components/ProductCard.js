import React from 'react';
import { Card } from 'react-bootstrap';

export default function ProductCard({ image, seller, price, location }) {
  return (
    <Card className="shadow-sm rounded-4 mb-4">
      <Card.Img variant="top" src={image} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title className="text-primary">{price}</Card.Title>
        <Card.Text>
          <strong>Seller:</strong> {seller} <br />
          <strong>Location:</strong> {location}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

