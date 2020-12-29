import React from 'react';
import GlobalStyle from './globalStyles.js';
import HomePage from './pages/HomePage/HomePage';
import Designs from './pages/DesignsPage';
import Contact from './pages/ContactPage';
// import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/designs' component={Designs} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;


// class App extends React.Component {

//   constructor(props) {
//     super(props); 
//     this.state = {
//       title: "Carter Cote",
//       headerLinks: [
//         { title: 'Home', path: "/" },
//         { title: 'Designs', path: "/designs" },
//         { title: 'Contact', path: "/contact" },
//       ],
//       home: {
//         title: "HI, I'M CARTER.",
//         subTitle: "I'm a first-year Computer Science student at Georgia Tech. I'm a problem-solver and a do-er.",
//         text: "Welcome to my Digital Playground. Feel free to explore..try not to get lost."
//       },
//       designs: {
//         title: "Graphic Designs"
//       },
//       contact: {
//         title: "About Me",
//         subTitle: "Let's Talk"
//       }
//     }
//   }
//   render() {
//     return (
//       <Router>
//         <Container className="p-0" fluid={true}>


//           <Navbar fixed="top" className="nav-theme justify-content between border-bottom" bg="transparent" bg="dark" variant="dark" expand="lg"> 
//             <Navbar.Brand>
//               <img
//                 alt="portfolio logo"
//                 src= {logo2}
//                 width="50"
//                 height="50"
//                 className="d-inline-block align-top"
//               />{' '}
              
//             </Navbar.Brand>
            
//             <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
//             <Navbar.Collapse id="navbar-toggle">
//               <Nav className="ml-auto">
//                 <Link className="nav-link" to="/">Home</Link>
//                 <Link className="nav-link" to="/designs">Designs</Link>
//                 <Link className="nav-link" to="/contact">Contact</Link>
//               </Nav>
              

//             </Navbar.Collapse>
//           </Navbar>

//           <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
//           <Route path="/designs" render={() => <DesignsPage title={this.state.designs.title} />} />
//           <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} />} />


//           <Footer />

//         </Container>
      
//       </Router>  
//       );
//   }

// }

// export default App;
