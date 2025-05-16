import { Box } from "@mui/material";
import React from 'react';
import PropTypes from 'prop-types';

function Content({ children, style, className }) {
    const lg_margin = {
        margin: "0px 0px 0px 0px",
    };
    return (
        <Box sx={lg_margin} style={style} className={className}>
            {children}
        </Box>
    )
}

export default Content;

// Define the props interface (optional but useful for TypeScript users)
Content.propTypes = {
    children: PropTypes.any, // Content to be rendered inside the div
    style: PropTypes.object, // Custom styles for the div
    className: PropTypes.string, // Custom CSS class
};