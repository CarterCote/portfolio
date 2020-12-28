import React from "react";
import Hero from "../components/Hero";
import ImageCard from "../components/ImageCard";
import Gallery from "../components/Gallery";


import Container from "react-bootstrap/Container";




function DesignsPage(props) {

    return(
        <div>
            <Hero title={props.title} />


            <Gallery />

        </div>

    );
}

export default DesignsPage;