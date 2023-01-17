import React from 'react';
import { Container } from 'react-bootstrap';
import bannarImage from '../../assets/images/award/christmas-party-menus-covent-garden-1.png';
const Section2 = () => {
  return (
    <Container>
      <div className='d-lg-flex flex-lg-row d-flex flex-column align-items-center justify-content-between'>
          <img className='img-fluid shadow-lg' src={bannarImage} alt="" />
        <div className='d-flex flex-column'>
          <p style={{ fontSize: "28px" }} className="text-success">
            Cake meme reflects coronavirus <br /> absurdity in a world where <br /> nothing is what it seems
          </p>
          <p style={{ fontSize: "15px" }}>
            Earlier this month, a viral video depicting hyper-realistic cakes as <br /> everyday items had folks on social media double-guessing every <br /> other post, and sometimes even their own realities, effectively <br /> launching the next meme : “Is this real or is this cake?”
          </p>
        </div>
      </div>
      <div className='d-flex flex-row align-items-center justify-content-start bg-white mt-lg-3 rounded' 
      style={{
        height:"50px",
      }}>
        <p className='ms-2 mb-0' style={{textDecoration:"underline", textDecorationColor:"red"}}>2021</p>
        <p className='ms-2 mb-0'>2022</p>
        <p className='ms-2 mb-0'>2023</p>
      </div>
    </Container>
  );
};

export default Section2;