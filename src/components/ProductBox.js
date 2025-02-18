import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductBox.css';
import '../App.css';

function ProductBox({ imageUrl, title, text, reverse, buttonText, route }) {
  const navigate = useNavigate();

  return (
    <div className={`product-card ${reverse ? 'reverse' : ''}`}>
      <div className="product-container">
        <img src={imageUrl} alt="Food" className="product-image" />
        <div className="product-text">
          <h2>{title}</h2>
          <p>
            {text.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          <button className="product-button" onClick={() => navigate(route)}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
