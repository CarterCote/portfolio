import React from "react";

import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Container from "react-bootstrap/Container";


//Components
// import GalleryContainer from './GalleryContainer';
// import CarouselIntro from './CarouselIntro';
// import ScrollAnimation from 'react-animate-on-scroll';
// import { Parallax } from "react-parallax";
// import AnchorLink from 'react-anchor-link-smooth-scroll'

// import ProjectContainer from './Projects/ProjectContainer'
// import LazyLoad from 'react-lazy-load';
// import Featured from './PhotoProjects/Featured_Portfolio'
// import ContactCard from './ContactCard'


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidUpdate() {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
        console.log("HOME SCROLL_______");
    }
    componentDidMount() {
        window.scroll({
            top: 0.5,
            behavior: "smooth"
        });
        console.log("HOME SCROLL_______Did Mount");
    }

    render() {
        return(
            <div>
                <Hero title={this.props.title} subTitle={this.props.subTitle} text={this.props.text} />
                <Carousel />

            </div>

        );
    }
}

export default HomePage;