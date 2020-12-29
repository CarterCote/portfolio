import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
      <video src='/assets/images/static.mp4' autoPlay loop muted />
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
// import React from "react";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import '../App.css';
// import TitleMessage from "../components/TitleMessage";



// function Hero(props) {

//     return(
//         <Jumbotron className="bg-dark hub jumbotron-fluid p-100">
//             <Container fluid={true} className="py-20">
//                 <Row className="justify-content-center py-5">
//                     <Col md={8} sm={12}>
//                         { props.title && <h1 className="display-1 jumbotron-title font-weight-bolder">{props.title}</h1> }
//                         { props.subTitle && <h3 className="display-5 jumbotron-title font-weight-light">{props.subTitle}</h3> }
//                         { props.text && <h3 className="lead jumbotron-title font-weight-light">{props.text}</h3> }

//                     </Col>
//                 </Row>
//             </Container>
//         </Jumbotron>
//     );

// }

// export default Hero;