import React from "react";

import ImageCard from "../components/ImageCard";
import ImageCardInfo from "../components/ImageCardInfo";


import one from "../assets/images/001.jpg";
import two from "../assets/images/002.jpg";
import three from "../assets/images/003.jpg";
import four from "../assets/images/004.png";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "AOC's Helping Hand",
                    subTitle: "College and Career Program for alma mater HS.",
                    imgSrc: one,
                    link: "https://www.aochelpinghand.org",
                    selected: false
                },
                {
                    id: 1,
                    title: "Six Feet Supplies",
                    subTitle: "Nonprofit that delivers groceries to the immunocompromised.",
                    imgSrc: two,
                    link: "https://www.sixfeetsupplies.com",
                    selected: false
                },
                {
                    id: 2,
                    title: "Global Prep Academy",
                    subTitle: "Website for after-school skill-building and global leadership program",
                    imgSrc: three,
                    link: "https://www.globalprepacademy.com",
                    selected: false
                },
                {
                    id: 3,
                    title: "Commes Des Garcons",
                    subTitle: "Website for after-school skill-building and global leadership program",
                    imgSrc: four,
                    link: "https://www.globalprepacademy.com",
                    selected: false
                },
            ]
        }

    }



    handleCardHover = (id, card) => {
        
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <ImageCard item={item} onMouseOver={(e => this.handleCardHover(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around p-10">
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>
        );

    }
}

export default Gallery;