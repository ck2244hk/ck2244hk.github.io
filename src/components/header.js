// components/Header.js


import React from 'react';
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
            <h4> Last Update: 20 May 2024</h4>
        </Box>

        <hr></hr>
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="nav tabs"
                role="navigation"
                centered
            >
                <LinkTab label="Profile" href="./" />
                <LinkTab label="Travel" href="./travel" />
                <LinkTab label="Contact" href="./contact" />
                <LinkTab label="Privacy" href="./privacy" />
            </Tabs>
        </Box>
    </div>;
}

export default Header;

LinkTab.propTypes = {
    selected: PropTypes.bool,
};