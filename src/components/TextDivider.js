import React from 'react';
import './TextDivider.css';

function TextDivider({ text }) {
    const processBoldTags = (text) => {
        const parts = text.split(/(<bold>|<\/bold>)/);
        return parts.map((part, index) => {
            if (part === '<bold>') return null;
            if (part === '</bold>') return null;
            if (parts[index - 1] === '<bold>') return <strong key={index}>{part}</strong>;
            return part;
        }).filter(Boolean);
    };

    return (
        <div className="text-divider">
            <hr className="divider-line" />
            <p className="divider-text">
                {text.split('\\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {processBoldTags(line)}
                        <br />
                    </React.Fragment>
                ))}
            </p>
            <hr className="divider-line" />
        </div>
    );
}

export default TextDivider;