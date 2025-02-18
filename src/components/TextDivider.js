import React from 'react';
import './TextDivider.css';

function TextDivider({ text }) {
    return (
        <div className="text-divider">
            <hr className="divider-line" />
            <p className="divider-text">
                {text.split('\\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </p>
            <hr className="divider-line" />
        </div>
    );
}

export default TextDivider;