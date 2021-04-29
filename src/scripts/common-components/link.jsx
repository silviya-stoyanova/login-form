import '../../styles/common-components/link.scss';

import React from 'react';

const Link = ({ href, text, children, className }) => {
    const combinedClassName = `link ${className}`;

    const content = !!text
        ? text
        : children;

    return (
        <a href={href} className={combinedClassName} >
            {content}
        </a>
    )
}

export default Link;