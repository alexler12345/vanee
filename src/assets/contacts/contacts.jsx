import './contacts.css';
import { Container, Row, Col } from 'react-bootstrap';

export function Contacts() {
  return (
    <Container className="contactinfo-main py-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <div className="contactinfo p-4 shadow rounded">
            <a className="contactinfo-a" href="tel:+14033206060">
              <i className="fas fa-phone-alt me-2"></i> +1 403-320-6060
            </a>
            <a className="contactinfo-a" href="mailto:truckwash@vaneelive.com">
              <i className="fas fa-envelope me-2"></i> truckwash@vaneelive.com
            </a>
            <a
              className="contactinfo-a"
              href="https://www.google.com/maps?cid=10197179475260377286"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-map-marker-alt me-2"></i> 3716 9 Ave N, Lethbridge, AB
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
