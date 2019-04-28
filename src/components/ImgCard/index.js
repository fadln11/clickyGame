import React from 'react';
import "./style.css";

const ImgCard = props => (
  <div className="card col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
    <img className="img-container" src={props.src} id={props.id}
      alt={props.alt} onClick={props.handleClick} />
  </div>
)


export default ImgCard;