import React from 'react';
import './Cards.css';
import { Container } from '../globalStyles';

import DesignCardItem from './DesignCardItem';
import one from "../assets/images/001.jpg";
import two from "../assets/images/002.jpg";
import three from "../assets/images/003.jpg";
import four from "../assets/images/004.png";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
} from './InfoSection/InfoSection.elements';


function DesignCard({
  lightBg,
  imgStart,
}) {
  return (
    
    <div className='cards'>
    {/* <InfoSec lightBg={lightBg}>
      <Container>
        <InfoRow >
        </InfoRow>
      </Container>
    </InfoSec> */}
    <h1 className="top-line">RECENT WORKS</h1>

      <div className='designcards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <DesignCardItem
              src={one}
              text="AOC's Helping Hand"
              subtext="Designed and developed Wix website for college & career program that I developed for my alma mater HS. Recruited 150+ alumni to provide dynamic content for the site."
              label='UX/UI Design'
              path='/services'
            />
            <DesignCardItem
              src={two}
              text='Six Feet Supplies'
              subtext="Designed and developed Wix website for nonprofit that delivers groceries to the immunocompromised. Featured on CNN, LA Times. Over 14,000 site visitors."
              label='UX/UI Design'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <DesignCardItem
              src={three}
              text='Global Prep Academy'
              subtext="Designed and developed Wix website for after-school program that guides students towards their career path. Over 3000 site visitors."
              label='UX/UI Design'
              path='/services'
            />
            <DesignCardItem
              src={four}
              text='Wake Up, Stand Up'
              subtext="Designed and developed Wix website for student-led annual sexual harassment prevention seminar. Over 2000 site visitors."
              label='UX/UI Design'
              path='/products'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default DesignCard;

// import React from "react";

// import CardInfo from "../components/CardInfo";

// function Card(props) {

//     return(
//         <div className="d-inline-block proj-card" onClick={(e) => props.click(props.item)}>
//             <img className="proj-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
//             { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
//         </div>
//     );
// }

// export default Card;