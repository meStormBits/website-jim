import React from "react";
import "./TopCardProducts.css";
import "../App.css";

function TopCardProducts({ imageUrl, title, text }) {
    return (
        <div className="top-text-card">
            <div className="top-image-container">
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className="top-card-image" 
                />
                <div className="top-overlay-text">
                    <h2>{title}</h2>
                    <p>
                        {text.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TopCardProducts;
