import React, { useState, useEffect } from 'react';

const fadeIn = ({ direction = 'up', delay = 0, children }) => {
    const [style, setStyle] = useState({
        transform: `translate(${direction === 'left' ? 40 : direction === 'right' ? -40 : 0}px, ${direction === 'up' ? 40 : direction === 'down' ? -40 : 0}px)`,
        opacity: 0,
        transition: `transform 1.4s ${delay}s, opacity 1.4s ${delay}s`,
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStyle({
                transform: 'translate(0, 0)',
                opacity: 1,
                transition: `transform 1.2s ${delay}s, opacity 1.2s ${delay}s`,
            });
        }, 0);

        return () => clearTimeout(timeout);
    }, [direction, delay]);

    return <div style={style}>{children}</div>;
};

export default fadeIn;
