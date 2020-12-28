import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";



function Footer() {

        return(
            <footer className="mt-5 mb-120">

                <Jumbotron className="bg-transparent jumbotron-fluid p-0">
                    <Container fluid={true} className="p-0"> 
                        <Row className="justify-content-center p-100">
                            <Col md={4} sm={12}>
                            <h5>Social</h5>
                            <br />
                            <Button variant="link" className="pl-0">INSTAGRAM</Button>
                            <br />
                            <Button variant="link" className="pl-0">YOUTUBE</Button>
                            <br />
                            <Button variant="link" className="pl-0">TELEGRAM</Button>
                            </Col>
                            <Col md={4} sm={12}>
                            <h5>Contact</h5>
                            <br />
                            <Button variant="link" className="pl-0">CARTERCOTE06@GMAIL.COM</Button>
                            <br />
                            <Button variant="link" className="pl-0">LINKEDIN</Button>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col md={4} sm={12}>
                                <p>Lol</p>
                            </Col>
                            <Col md={4} sm={12}>
                                <p>Lol</p>
                            </Col>

                        </Row>   
                    </Container>

                </Jumbotron>
            </footer>
        );
}

export default Footer;