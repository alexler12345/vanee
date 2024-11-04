import './title.css';
import { Container, Row, Col } from 'react-bootstrap';

export function Title() {
  return (
    <Container className="title-container text-center py-5">
      <Row>
        <Col>
          <h1 className="display-4 fw-bold text-primary title-a">Vanee Truck Wash</h1>
          <h2 className="lead text-info title-b">"Where Big Rigs Shine and Trailers Sparkle"</h2>
        </Col>
      </Row>
    </Container>
  );
}
