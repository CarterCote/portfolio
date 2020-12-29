import React from "react";

import Card from "../components/Card";

import gpa from "../assets/images/gpa.jpg";
import sixfeet from "../assets/images/sixfeet.JPG";
import helpinghand from "../assets/images/helpinghand.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "AOC's Helping Hand",
                    subTitle: "College and Career Program for alma mater HS.",
                    imgSrc: helpinghand,
                    link: "https://www.aochelpinghand.org",
                    selected: false
                },
                {
                    id: 1,
                    title: "Six Feet Supplies",
                    subTitle: "Nonprofit that delivers groceries to the immunocompromised.",
                    imgSrc: sixfeet,
                    link: "https://www.sixfeetsupplies.com",
                    selected: false
                },
                {
                    id: 2,
                    title: "Global Prep Academy",
                    subTitle: "Website for after-school skill-building and global leadership program",
                    imgSrc: gpa,
                    link: "https://www.globalprepacademy.com",
                    selected: false
                },
            ]
        }

    }



    handleCardClick = (id, card) => {
        
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
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>
        );

    }
}

export default Carousel;