import React from 'react';
import {Col,Row,Container} from 'react-bootstrap';

export const Footer = () => {
  
  return (
    <footer className="py-3 text-center">
    <Container>
      <Row>
        <Col xs={12} md={6} className="mx-auto">
          <p>&copy; Dvir Bublil</p>
        </Col>
      </Row>
    </Container>
  </footer>
  );
};