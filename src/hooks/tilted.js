import React, { useState, useEffect, useRef } from 'react';

const Tilted = () => {
    const elementRef = useRef(null);
    const [tiltX, setTiltX] = useState(0);
    const [tiltY, setTiltY] = useState(0);

    const handleMouseMove = (event) => {
        if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();

            const mousePosition = {
                x: event.clientX,
                y: event.clientY
            };

            const cardWidth = rect.width;
            const cardHeight = rect.height;

            const tiltX = ((mousePosition.x - (cardWidth / 2)) * 0.05);
            const tiltY = ((mousePosition.y - (cardHeight / 2)) * 0.05);

            setTiltX(tiltX);
            setTiltY(tiltY);
        };

    }

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return [elementRef, `rotate(${tiltX}deg, ${tiltY}deg)`];
}

export default Tilted;
