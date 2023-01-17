import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import CardImage from '../../assets/images/award/WhatsApp Image 2022-12-21 at 3.50 1.png';
const Section3 = () => {
  return (
    <Container className='my-3'>
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card className='shadow'>
              <Card.Img variant="top" src={CardImage} />
              <Card.Body>
                <Card.Title className='text-success'>John Lewis to make final journey across <br /> Edmund Pettus Bridge in procession</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className='d-flex justify-content-center mt-3'>
        <button className='px-5 py-3'
        style={
          {
           border:"1px solid #C31815",
           color:"#C31815",
           fontSize:"14px",
          }
        }>
            VIEW MORE
        </button>
      </div>
    </Container>
  );
};

export default Section3;