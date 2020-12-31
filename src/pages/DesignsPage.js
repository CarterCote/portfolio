import React from "react";
import Hero from "../components/Hero";
import ImageCard from "../components/ImageCard";
import Gallery from "../components/Gallery";
import { InfoSection } from '../components';
import ContentSection from "../components/ContentSection";
import DesignCard from '../components/DesignCard';


import Container from "react-bootstrap/Container";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, infoObjTwo } from './HomePage/HomePageData';






function DesignsPage(props) {

    return(
        <div>
            <InfoSection {...homeObjOne} />
            <ContentSection {...infoObjTwo} />



            <DesignCard />

        </div>

    );
}

export default DesignsPage;