import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";



function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hi, I'm Carter. I'm a first year Computer Science and Industrial Design student at Georgia Tech.</p>
                <p>I like taking an idea and bringing it to life in the digital realm.</p>
                <p>I'm passionate about spreading opportunity, and creating a more equitable future.</p>
                <p>I never leave things half-done, and I obsess over the details. I like problem-solving in a creative, value-oriented way.</p>
                <p>I don’t try to change THE world, but I constantly strive to change A world.</p>


            </Content>
        </div>

    );
}

export default AboutPage;