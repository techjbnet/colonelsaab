import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import CardImage from '../../assets/images/award/WhatsApp Image 2022-12-21 at 3.50 1.png';
const Section3 = () => {
  const data = [
    {
      image: CardImage,
      title: "John Lewis to make final journey across . Edmund Pettus Bridge in procession",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      image: CardImage,
      title: "John Lewis to make final journey across . Edmund Pettus Bridge in procession",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      image: CardImage,
      title: "John Lewis to make final journey across . Edmund Pettus Bridge in procession",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      image: CardImage,
      title: "John Lewis to make final journey across . Edmund Pettus Bridge in procession",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      image: CardImage,
      title: "John Lewis to make final journey across . Edmund Pettus Bridge in procession",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      image: CardImage,
      title: "John Lewis to make final journey across . Edmund Pettus Bridge in procession",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
  ]
  return (
    <Container className='my-3'>
      <Row xs={1} md={3} className="g-4">
        {
          data.map((item, index) => (
            <Col key={index}>
              <Card className='shadow'>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title className='text-success'>{item.title}</Card.Title>
                  <Card.Text>
                    {item.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
      <div className='d-flex justify-content-center'>
        <button className='px-5 py-3 mt-3'
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#C31815";
            e.target.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#fff";
            e.target.style.color = "#C31815";
          }}
          style={
            {
              border: "1px solid #C31815",
              color: "#C31815",
              fontSize: "14px",
            }
          }>
          VIEW MORE
        </button>
      </div>
    </Container>
  );
};

export default Section3;