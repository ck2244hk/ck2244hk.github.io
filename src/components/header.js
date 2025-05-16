// components/Header.js


import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function samePageLinkNavigation(event) {
    if (
        event.defaultPrevented ||
        event.button !== 0 || // ignore everything but left-click
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
    ) {
        return false;
    }
    return true;
}
const handleLinkClick = (path) => {
    window.location.hash = path;
};

function LinkTab(props) {


    return (
        <Tab
            component="a"
            // onClick={(event) => {
            //     // Routing libraries handle this, you can remove the onClick handle when using them.
            //     if (samePageLinkNavigation(event)) {
            //         event.preventDefault();
            //     }


            // }}
            aria-current={props.selected && 'page'}

            {...props}
        />
    );
}



function Header(props) {
    const [value, setValue] = React.useState(props.selectedInd);

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const NavBarStyle = {
        position: 'absolute',
        top: scrollPosition + window.screen.availHeight / 2 - 144,
    };

    const handleChange = (event, newValue) => {
        // event.type can be equal to focus with selectionFollowsFocus.
        if (
            event.type !== 'click' ||
            (event.type === 'click' && samePageLinkNavigation(event))
        ) {
            setValue(newValue);
            console.log("New Value: " + newValue);
        }
    };

    return <div>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center">
            <h1> Version 1.01392121 </h1>
        </Box>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center">
            <h4> Last Update: 02 Sep 2024</h4>
        </Box>

        <hr></hr>

        <Box sx={{ height: '100vh' }} style={NavBarStyle}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="nav tabs"
                role="navigation"
                orientation="vertical"
                centered
            >
                <LinkTab label="Profile" href="#/" onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }} />
                {/* <LinkTab label="Travel" href="#/travel" onClick={(e) => { e.preventDefault(); handleLinkClick('/travel'); }} /> */}
                <LinkTab label="Contact" href="#/contact" onClick={(e) => { e.preventDefault(); handleLinkClick('/contact'); }} />
                <LinkTab label="Privacy" href="#/privacy" onClick={(e) => { e.preventDefault(); handleLinkClick('/privacy'); }} />
            </Tabs>
        </Box>



    </div>;
}

export default Header;

LinkTab.propTypes = {
    selected: PropTypes.bool,
};