import React, { useState } from 'react';
import './Reviews.css';

function Reviews() {
    const [currentPage, setCurrentPage] = useState(0);
    const reviewsPerPage = 3;

    const reviews = [
        {
            text: "Versiering voor mijn 18de verjaardag besteld bij Van Vlimmeren Feestverhuur. Ballonnen met de led cijfers, het was super mooi! Goed geregeld en duidelijke communicatie. Hier moet je zijn voor je decoratie.",
            author: "Jens Buurstede",
            rating: 5,
        },
        {
            text: "Geweldig mooi aangekleed met ballonnen en licht cijfers. Ook heel veel plezier gehad van de photobooth. Alles wordt geregeld. Top!",
            author: "Edwin Jaspers",
            rating: 5,
        },
        {
            text: "Van Vlimmeren Feestverhuur is geweldig! Alles wordt op en top geregeld en er word enorm goed meegedacht over het hele feest. Je staat er nooit alleen voor! Een enorme aanrader.",
            author: "Lars Kalkman",
            rating: 5,
        },
    ];

    const pageCount = Math.ceil(reviews.length / reviewsPerPage);

    const displayedReviews = reviews.slice(
        currentPage * reviewsPerPage,
        (currentPage + 1) * reviewsPerPage
    );

    return (
        <div className="reviews-section">
            <div className="reviews-title">
                <h2>RECENSIES</h2>
                <div className="title-underline"></div>
            </div>
            <div className="reviews-container">
                {displayedReviews.map((review, index) => (
                    <div 
                        key={index} 
                        className="review-card active"
                    >
                        <div className="stars">
                            {[...Array(review.rating)].map((_, i) => (
                                <i key={i} className="fas fa-star"></i>
                            ))}
                        </div>
                        <p className="review-text">{review.text}</p>
                        <div className="author-info">
                            <div className="author-avatar">
                                <i className="fas fa-user"></i>
                            </div>
                            <p className="author-name">{review.author}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="review-dots">
                {[...Array(pageCount)].map((_, index) => (
                    <span 
                        key={index} 
                        className={`dot ${index === currentPage ? 'active' : ''}`}
                        onClick={() => setCurrentPage(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Reviews;