import { Box, Card } from "@mui/material";
import React, { useRef } from "react";
import PropTypes from "prop-types";
// import Tilted from "../hooks/tilted";
import { Visibility } from "@mui/icons-material";

function MyGrid({
  children,
  position,
  columnFrom = 1,
  columnSpans = 1,
  rowFrom = 1,
  rowSpans = 1,
  animationName = "fadein-upward",
  alwaysOn = false,
  showInitialBgColor = true,
  onClick = null,
  animationDuration = "3s",
  classname = "",
  gridref = () => {},
}) {
  const gridStyle = {
    gridColumn: `${columnFrom} / span ${columnSpans}`,
    gridRow: `${rowFrom} / span ${rowSpans}`,
  };

  const card_style = {
    backgroundColor: showInitialBgColor
      ? "var(--background-color)"
      : "transparent",
    color: "var(--primary-color)",
    margin: "auto",
    borderRadius: "15px",
    boxShadow: "none",
    pointerEvents: "none",
  };

  const animationStyle = {
    visibility: "visible",
    animationName: animationName,
    animationDuration: animationDuration,
    animationFillMode: "forwards",
    opacity: alwaysOn ? "1" : "0",
    cursor: "pointer",
    pointerEvents: alwaysOn ? "auto" : "none",
    backdropFilter: "blur(18.200000762939453px)",
  };

  const animate = () => {
    switch (position) {
      case 0:
        return animationStyle;
      case +1:
        return alwaysOn
          ? animationStyle
          : {
              visibility: "visible",
              opacity: "0.5",
              cursor: "pointer",
              pointerEvents: "auto",
              backdropFilter: "blur(18.200000762939453px)",
            };
      case -1:
      default:
        return { visibility: alwaysOn ? "visible" : "hidden" };
    }
  };

  return (
    <Box sx={gridStyle} className={"my-grid "} style={{ borderRadius: "15px" }}>
      <Card
        onClick={onClick}
        sx={[
          {
            borderRadius: "0px",
            width: "100%",
            height: "100%",
          },
          card_style,
        ]}
        style={animate()}
        ref={(el) => gridref(el)}
        className={"my-card " + classname}
      >
        {children}
      </Card>
    </Box>
  );
}

export default MyGrid;

// Define the props interface (optional but useful for TypeScript users)
MyGrid.propTypes = {
  children: PropTypes.any,
  columnFrom: PropTypes.number,
  columnSpans: PropTypes.number,
  rowFrom: PropTypes.number,
  rowSpans: PropTypes.number,
  position: PropTypes.number.isRequired,
  animationName: PropTypes.string,
  alwaysOn: PropTypes.bool,
};
