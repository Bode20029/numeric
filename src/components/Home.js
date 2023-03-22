import React from 'react';
import { Button, Col, Container, Row , Image} from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="auto" className="text-center mb-4">
          <h1>HOME</h1>
        </Col>
      </Row>
    
    </Container>
  );
}

export default Home;