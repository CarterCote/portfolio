import React from "react";

import Axios from 'axios';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


import Hero from "../components/Hero";
import Content from "../components/Content";



class ContactPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {

        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true,
        });

        Axios.post("http://localhost:3030/api/email", this.state)
            .then(res => {

                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });

                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })

            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
    }

    render() {
        
        return(
            // <div>
                // <Hero title={this.props.title} />

                // <Content>
                //     <p>Hi, I'm Carter. I'm a first year Computer Science and Industrial Design student at Georgia Tech.</p>
                //     <p>I like taking an idea and bringing it to life in the digital realm.</p>
                //     <p>I'm passionate about spreading opportunity, and creating a more equitable future.</p>
                //     <p>I never leave things half-done, and I obsess over the details. I like problem-solving in a creative, value-oriented way.</p>
                //     <p>I don’t try to change THE world, but I constantly strive to change A world.</p>


                // </Content>
            // </div>
            <div>
                <Hero title={this.props.title} />
                <Content>
                    <p>Hi, I'm Carter. I'm a first year Computer Science and Industrial Design student at Georgia Tech.</p>
                    <p>I like taking an idea and bringing it to life in the digital realm.</p>
                    <p>I'm passionate about spreading opportunity, and creating a more equitable future.</p>
                    <p>I never leave things half-done, and I obsess over the details. I like problem-solving in a creative, value-oriented way.</p>
                    <p>I don’t try to change THE world, but I constantly strive to change A world.</p>


                </Content>
                <Hero subTitle={this.props.subTitle} />

                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="text" value={this.state.email} onChange={this.handleChange}/>
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange}/>
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}

                    </Form>

                </Content>
            </div>
        );
    }

}

export default ContactPage;