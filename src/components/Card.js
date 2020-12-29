import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import sixfeet from "../assets/images/sixfeet.JPG";
import gpa from "../assets/images/gpa.jpg";
import helpinghand from "../assets/images/helpinghand.jpg";
import wusu from "../assets/images/wusu.jpg";
import cazares from "../assets/images/cazares.png";



function Card() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={helpinghand}
              text="AOC's Helping Hand"
              subtext="Designed and developed Wix website for college & career program that I developed for my alma mater HS. Recruited 150+ alumni to provide dynamic content for the site."
              label='UX/UI Design'
              path='/services'
            />
            <CardItem
              src={sixfeet}
              text='Six Feet Supplies'
              subtext="Designed and developed Wix website for nonprofit that delivers groceries to the immunocompromised. Featured on CNN, LA Times. Over 14,000 site visitors."
              label='UX/UI Design'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={gpa}
              text='Global Prep Academy'
              subtext="Designed and developed Wix website for after-school program that guides students towards their career path. Over 3000 site visitors."
              label='UX/UI Design'
              path='/services'
            />
            <CardItem
              src={wusu}
              text='Wake Up, Stand Up'
              subtext="Designed and developed Wix website for student-led annual sexual harassment prevention seminar. Over 2000 site visitors."
              label='UX/UI Design'
              path='/products'
            />
            <CardItem
              src={cazares}
              text='Cazares for COC'
              subtext="Designed and developed Wix website for (now nominated) Sebastian Cazares's campaign for Community College Board of Trustees."
              label='UX/UI Design'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;

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