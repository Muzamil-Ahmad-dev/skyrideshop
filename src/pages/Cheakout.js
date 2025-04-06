// src/pages/Checkout.js
import React from "react";
import { useSelector } from "react-redux";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

const Checkout = () => {
  const cart = useSelector((state) => state.handleCart);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <Row>
          {cart.map((item) => (
            <Col md={4} key={item.id} className="mb-4">
              <Card className="shadow-lg h-100">
                <Card.Img variant="top" src={item.image} alt={item.name} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>Price: ${item.price}</Card.Text>
                  <Card.Text>Quantity: {item.qty}</Card.Text>
                  <Card.Text>Total: ${item.price * item.qty}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {cart.length > 0 && (
        <div className="text-center mt-4">
          <h4>Total Price: ${totalPrice}</h4>
          <Button variant="success" className="mt-3">
            Complete Purchase
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Checkout;
