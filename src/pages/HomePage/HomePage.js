import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './HomePageData';
import { InfoSection } from '../../components';

import Carousel from "../../components/Carousel";
import TitleMessage from "../../components/TitleMessage";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import '../../App.css';
import Card from '../../components/Card';
import Hero from "../../components/Hero";
import Footer from '../../components/Footer/Footer';

function HomePage() {
  return (
    <>
      {/* <InfoSection {...homeObjOne} /> */}
      <TitleMessage />
      {/* <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} /> */}
      
      <Card />
      {/* <Footer /> */}
    </>
  );
}

export default HomePage;

// class HomePage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         }
//     }
//     componentDidUpdate() {
//         window.scroll({
//             top: 0,
//             behavior: "smooth"
//         });
//         console.log("HOME SCROLL_______");
//     }
//     componentDidMount() {
//         window.scroll({
//             top: 0.5,
//             behavior: "smooth"
//         });
//         console.log("HOME SCROLL_______Did Mount");
//     }

//     render() {
//         return(
//             <div className="App" style={{ position: "relative" }}>
//                 <TitleMessage />


//                 <Hero  />
//                 {/* <Hero title={this.props.title} subTitle={this.props.subTitle} text={this.props.text} /> */}

//                 <Carousel />

//             </div>

//         );
//     }
// }

// export default HomePage;