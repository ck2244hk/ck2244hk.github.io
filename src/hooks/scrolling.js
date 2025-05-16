import { useState, useEffect, useRef } from 'react';

// const useScroll = (options) => {
//     const [isInView, setIsInView] = useState(false);
//     const targetRef = useRef(null);



//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             const [entry] = entries;
//             if (entry.isIntersecting) {
//                 setIsInView(true);
//             }
//         }, options);

//         if (targetRef.current) {
//             observer.observe(targetRef.current);
//         }

//         return () => {
//             if (targetRef.current) {
//                 observer.unobserve(targetRef.current);
//             }
//         };
//     }, [options]);

//     return [targetRef, isInView];

// };

// Position Index Meaning
// -1: below the bottom of the screen
// 0: in the screen
// 1: Above the top of the screen

const useScroll = () => {
    const elementRef = useRef(null);
    const [positionIndex, setPositionIndex] = useState(0);

    const checkElementPosition = () => {
        if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

            const below = rect.top > viewportHeight;
            const above = rect.bottom < 0;
            const inViewport = !(below || above);

            if (below) {
                setPositionIndex(-1)
            } else if (inViewport) {
                setPositionIndex(0);
            } else if (above) {
                setPositionIndex(1);
            }
        }
    };

    useEffect(() => {
        checkElementPosition();
        window.addEventListener('scroll', checkElementPosition);
        window.addEventListener('resize', checkElementPosition);

        return () => {
            window.removeEventListener('scroll', checkElementPosition);
            window.removeEventListener('resize', checkElementPosition);
        };
    }, []);

    return [elementRef, positionIndex];
};

export default useScroll;