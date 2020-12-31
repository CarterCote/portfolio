import React from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";


function DesignCardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Row className='cards__item__link' to={props.path}>
          <figure className='designcards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          {/* <div className='cards__item__info'>
            <h2 className='cards__item__title' to={props.path}>{props.text}</h2>
            <h2 className='cards__item__text'>{props.subtext}</h2>
            <Button variant="primary">VIEW PROJECT</Button>
          </div> */}
        </Row>
      </li>
    </>
  );
}

export default DesignCardItem;

// import React from "react";
// import { useSpring, animated } from "react-spring"; 

// function CardInfo(props){

//     const style = useSpring({opacity: 1, from: {opacity: 0}});

//     return(
//         <animated.div className="proj-card-info" style={style}>
//             <p className="proj-card-title">{props.title}</p>
//             <p className="proj-card-sub-title">{props.subTitle}</p>
//             <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>

//         </animated.div>
//     );
// }

// export default CardInfo;