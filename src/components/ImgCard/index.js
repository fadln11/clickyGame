import React from 'react';
import "./style.css";

const ImgCard = props => (
  <div className="card">
    <img className="img-container" src={props.src} id={props.id}
      alt={props.alt} onClick={props.handleClick} />
  </div>
)


export default ImgCard;