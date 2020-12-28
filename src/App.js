import React from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './App.css';


import logo2 from "./assets/images/logo2.png";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DesignsPage from "./pages/DesignsPage";
import ContactPage from "./pages/ContactPage";
import ImageCard from "./components/ImageCard";


class App extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      title: "Carter Cote",
      headerLinks: [
        { title: 'Home', path: "/" },
        { title: 'Designs', path: "/designs" },
        { title: 'Contact', path: "/contact" },
      ],
      home: {
        title: "Welcome to my Digital Playground",
        subTitle: "Projects that make a difference",
        text: "This is my personal portfolio. Explore my work below"
      },
      designs: {
        title: "Graphic Designs"
      },
      contact: {
        title: "About Me",
        subTitle: "Let's Talk"
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>


          <Navbar fixed="top" className="animate-navbar nav-theme justify-content between border-bottom" bbg="transparent" bg="dark" variant="dark" expand="lg"> 
            <Navbar.Brand>
              <img
                alt="portfolio logo"
                src= {logo2}
                width="50"
                height="50"
                className="d-inline-block align-top"
              />{' '}
              
            </Navbar.Brand>
            
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="mr-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/designs">Designs</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
              

            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/designs" render={() => <DesignsPage title={this.state.designs.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} />} />


          <Footer />

        </Container>

      </Router>  
      );
  }

}

export default App;
