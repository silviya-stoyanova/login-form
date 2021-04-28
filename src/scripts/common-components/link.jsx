import React from 'react';

const Link = ({ href, text, children, className }) => {
    const content = !!text
        ? text
        : children;

    return (
        <a href={href} className={className} >
            {content}
        </a>
    )
}

export default Link;