import React, { Component } from 'react';
import GlobalStyle from './globalStyles.js';
import HomePage from './pages/HomePage/HomePage';
import Designs from './pages/DesignsPage';
import Contact from './pages/ContactPage';
import Progress from "./components/Progress";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

export default class App extends Component {
  state = {
    scrollPostion: 0
  }

  listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        this.calculateScrollDistance();
      });
    });
  }

  calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = this.getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)

    this.setState({
      scrollPostion,
    });
  }

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }

  componentDidMount() {
    this.listenToScrollEvent();
  }


  render() {
    return (
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Progress scroll={this.state.scrollPostion + '%'} />

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

}

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
