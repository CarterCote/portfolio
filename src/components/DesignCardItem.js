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
        </Row>
      </li>
    </>
  );
}

export default DesignCardItem;