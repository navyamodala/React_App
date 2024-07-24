import React from 'react';
import "./card.css";

const Card = (props) => {
  const { id, image, title, description, category } = props;
  
  return (
    
    <div className="item">
      <img src={image} alt={title} className="item-image" />
      <h2 className="item-title">{title}</h2>
      <p className="item-description">{description}</p>
      <span className="item-category">{category}</span>
    </div>
    
  );
}

export default Card;
