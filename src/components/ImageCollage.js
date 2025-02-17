import React from 'react';
import './ImageCollage.css';

function ImageCollage({ images, reversed }) {
    if (reversed) {
        return (
            <div className="collage-container">
                <div className="collage-grid reversed">
                    <div className="collage-right">
                        {images.slice(0, 4).map((image, index) => (
                            <div key={index} className="collage-item">
                                <img 
                                    src={image.src} 
                                    alt={image.alt}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="collage-left">
                        <div className="collage-item">
                            <img 
                                src={images[4].src} 
                                alt={images[4].alt}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="collage-container">
            <div className="collage-grid">
                <div className="collage-left">
                    <div className="collage-item">
                        <img 
                            src={images[0].src} 
                            alt={images[0].alt}
                        />
                    </div>
                </div>
                <div className="collage-right">
                    {images.slice(1, 5).map((image, index) => (
                        <div key={index} className="collage-item">
                            <img 
                                src={image.src} 
                                alt={image.alt}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ImageCollage;