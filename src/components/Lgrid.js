import { Box, Card } from "@mui/material";
import React, { useRef } from "react";
import PropTypes from "prop-types";
// import Tilted from "../hooks/tilted";
import { Visibility } from "@mui/icons-material";

function MyLShapeGrid({
  content,
  title,
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
  subgrid = "",
  subgridContent = "",
  subgridTitle = "",
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
    boxShadow: "none",
    pointerEvents: "none",
    backdropFilter: "blur(18.200000762939453px)",
    // transform: tilted_style,
  };

  const animationStyle = {
    visibility: "visible",
    animationName: animationName,
    animationDuration: animationDuration,
    animationFillMode: "forwards",
    opacity: alwaysOn ? "1" : "0",
    cursor: "pointer",
    pointerEvents: alwaysOn ? "auto" : "none",
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
              animationName: animationName,
              cursor: "pointer",
              pointerEvents: "auto",
            };
      case -1:
      default:
        return { visibility: alwaysOn ? "visible" : "hidden" };
    }
  };

  return (
    <Box sx={gridStyle} className={"my-grid my-card " + subgrid} style={animate()} ref={(el) => gridref(el)}>
      <div className={subgridContent} >
        <Card
          onClick={onClick}
          sx={[
            {
              // width: width_of_column * columnSpans,
              // height: height_of_row * rowSpans + 32 * (rowSpans - 1) ,
              width: "100%",
              height: "100%",
              // borderRadius: "15px 15px 0px 15px",
              borderRadius: "0px",
              // outline: "none",
            },
            card_style,
          ]}
          className={classname}
          
          // style={animate()}
        >
          {content}
         
        </Card>
      </div>

      <div className={subgridTitle}>
        <Card
          onClick={onClick}
          sx={[
            {
              // width: width_of_column * columnSpans,
              // height: height_of_row * rowSpans + 32 * (rowSpans - 1) ,
              width: "100%",
              height: "100%",
              borderRadius: "0px",
              // outline: "none",
            },
            card_style,
          ]}
          className={classname}
          // style={animate()}
        >
           {title}
          
        </Card>
      </div>
    </Box>
  );
}

export default MyLShapeGrid;

// Define the props interface (optional but useful for TypeScript users)
MyLShapeGrid.propTypes = {
  children: PropTypes.any,
  columnFrom: PropTypes.number,
  columnSpans: PropTypes.number,
  rowFrom: PropTypes.number,
  rowSpans: PropTypes.number,
  position: PropTypes.number.isRequired,
  animationName: PropTypes.string,
  alwaysOn: PropTypes.bool,
};
