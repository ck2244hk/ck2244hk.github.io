// components/Home.js
import React, { useRef, useState, useEffect } from "react";
import Content from "../components/content.js";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CarouselSlider from "../components/carouselSlider.js"

import MyGrid from "../components/grid.js";
import MyLShapeGrid from "../components/Lgrid.js";
import logo from "../logo.svg";
import prgrss_op from "../assets/prgrss_op.png";
import selfie from "../assets/selfie01.png";
import anecdote from "../assets/anecdote.png";
import useScroll from "../hooks/scrolling.js";
import Bottom from "../components/bottom.js";

import rust_icon from "../assets/logos/rust.svg";
import js_icon from "../assets/logos/js.svg";
import java_icon from "../assets/logos/java.svg";
import dart_icon from "../assets/logos/dart.svg";
import csharp_icon from "../assets/logos/csharp.svg";

import dotnet_icon from "../assets/logos/dotnet.svg";
import flutter_icon from "../assets/logos/flutter.svg";

import github_icon from "../assets/logos/github.svg";
import linkedin_icon from "../assets/logos/linkedin.svg";
import facebook_icon from "../assets/logos/facebook.svg";
import discord_icon from "../assets/logos/discord-icon.svg";

import cat_img from "../assets/home/cat.png";
import hk_img from "../assets/home/hongkong.png";

import "./Home.css";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { height, maxHeight } from "@mui/system";
import { Block } from "@mui/icons-material";

function Home(props) {
  //   const options = { root: null, rootMargin: "0px", threshold: 1 };
  const gridRefs = useRef(new Array(11));
  // Tell the observer which elements to track
  const [centerRef, centerIsInView] = useScroll();

  const [hoverEnabled, setHoverEnabled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let completedCount = 0;
    let current = gridRefs.current;
    if (centerIsInView === -1) {
      setHoverEnabled(false);
    }

    const handleAnimationEnd = (e) => {
      completedCount++;
      console.log(
        "completed Count: " + completedCount,
        " gridRefs: " + gridRefs.current.length
      );
      if (completedCount === gridRefs.current.length) {
        setHoverEnabled(true);
      } else {
        setHoverEnabled(false);
      }
    };

    current.forEach((ref) => {
      ref.addEventListener("animationend", handleAnimationEnd);
      console.log("adding animationend event listener");
    });

    return () => {
      if (current != null) {
        current.forEach((ref) => {
          if (ref != null) {
            ref.removeEventListener("animationend", handleAnimationEnd);
          }
        });
      }

      // gridRefs.current = new Array(5);
      completedCount = 0;

      console.log("removing ref current");
    };
  }, [gridRefs, centerIsInView]);

  const handleClickNavigate = (path) => {
    console.log("Card clicked!");
    window.open(path, "_blank");
  };
  const navigate = useNavigate();

  const nextPath = (path) => {
    console.log("navigating");
    navigate(path);
  };
  const setRef = (el, key) => {
    if (el && key < 11) {
      gridRefs.current[key] = el;
    }
  };

  const gridContainerStyle = {
    display: "grid",
    // backgroundColor: '#2196F3',
    padding: "10px",
    rowGap: "2.7em",
    columnGap: "2.7em",
    // width: "90%",
    // height: "100vh",
    gridTemplateRows: "repeat(21, 0px)",
    gridTemplateColumns: "repeat(31, 0px)",
  };

  const fadeinUpwardContainerStyle = {
    position: "sticky",
    top: 30,
    height: "100vh",
    alignContent: "center",
  };

  const ScoialMediaCenter = styled.div`
    width: 100%;
    height: 2.7em;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
  `;

  return (
    // <Content style={{ background: "#272727" }}>
    <Content>
      <Box
        sx={{
          bottom: 100 - scrollPosition + "px",
          position: "fixed",
          left: "50%",
          transform: "translate(-62%, -50%)",
        }}
      >
        <h1> Scroll Down to See More</h1>
      </Box>

      <Box sx={fadeinUpwardContainerStyle}>
        <img
          src={cat_img}
          alt="cat"
          style={{
            opacity: centerIsInView !== -1 ? "1" : "0",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -9vh)",
            width: "8vw",
            zIndex: 999,
            transition: "opacity 2s",
          }}
        ></img>
        <Box
          sx={{
            width: "min-content",
            display: "block",
            margin: "auto",
          }}
        >
          <div style={{}}>
            <Box sx={gridContainerStyle}>
              {/* grid 0 */}
              <MyGrid
                columnFrom={14}
                rowFrom={10}
                columnSpans={4}
                rowSpans={3}
                position={centerIsInView}
                animationName="add-card-bg"
                alwaysOn={true}
                showInitialBgColor={false}
                classname={centerIsInView === -1 ? " start-up-screen " : ""}
                // classname={`${hoverEnabled ? "hover-enabled" : ""}`}
              >
                <div style={{ margin: "auto" }}>
                  <div className="card-content" sx={{ alignContent: "center" }}>
                    <h1>Hi there!</h1>
                    <p>I'm Jack</p>
                  </div>
                </div>
              </MyGrid>

              {/* grid 1 */}
              <MyGrid
                columnFrom={1}
                rowFrom={1}
                columnSpans={8}
                rowSpans={5}
                position={centerIsInView}
                animationName="fadein-left"
                animationDuration="3s"
                gridref={(el) => setRef(el, 0)}
                classname={`${hoverEnabled ? "hover-enabled" : ""}`}
              >
                <div className="card-content" sx={{}}>
                  <h3>Proud to be a</h3>
                  <h2>Hong Konger</h2>
                  <img src={hk_img} alt="Hong Kong"></img>
                </div>
              </MyGrid>

              {/* grid 2 */}
              <MyGrid
                columnFrom={9}
                rowFrom={1}
                columnSpans={5}
                rowSpans={12}
                position={centerIsInView}
                animationName="fadein-downward"
                animationDuration="3s"
                gridref={(el) => setRef(el, 1)}
                classname={`${hoverEnabled ? "hover-enabled" : ""}`}
              >
                <div className="card-content">
                  <h1>Frameworks</h1>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      height: "25em",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <img src={dotnet_icon} width={"50px"} height={"50px"} />
                    <img src={flutter_icon} width={"50px"} height={"50px"} />
                  </div>
                </div>
              </MyGrid>

              {/* grid 3 */}
              <MyGrid
                columnFrom={14}
                rowFrom={1}
                columnSpans={14}
                rowSpans={7}
                position={centerIsInView}
                animationName="fadein-downward"
                animationDuration="3s"
                gridref={(el) => setRef(el, 2)}
                classname={`${hoverEnabled ? "hover-enabled" : ""}`}
              >
                <div className="card-content">
                  <h1>Skills</h1>
                  <div
                    style={{
                      width: "100%",
                      height: "12em",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <img src={rust_icon} width={"50px"} height={"50px"} />
                    <img src={dart_icon} width={"50px"} height={"50px"} />
                    <img src={js_icon} width={"50px"} height={"50px"} />
                    <img src={csharp_icon} width={"50px"} height={"50px"} />
                    <img src={java_icon} width={"50px"} height={"50px"} />
                  </div>
                </div>
              </MyGrid>

              {/* grid 4 */}
              <MyGrid
                columnFrom={28}
                rowFrom={1}
                columnSpans={4}
                rowSpans={7}
                position={centerIsInView}
                animationName="fadein-downward"
                gridref={(el) => setRef(el, 3)}
                classname={`${hoverEnabled ? "hover-enabled" : ""}`}
              >
                <div
                  className="card-content"
                  style={{
                    height: "16.7em",
                    alignContent: "center",
                  }}
                >
                  <h1>Full Stack Developer</h1>
                </div>
              </MyGrid>

              {/* grid 5 */}
              <MyGrid
                columnFrom={1}
                rowFrom={6}
                columnSpans={8}
                rowSpans={15}
                position={centerIsInView}
                animationName="fadein-left"
                gridref={(el) => setRef(el, 4)}
                classname={`${hoverEnabled ? "hover-enabled" : ""}`}
                onClick={() =>
                  handleClickNavigate("https://github.com/ck2244hk/Anecdote")
                }
              >
                <div className="card-content">
                  <h1>Projects</h1>
                  <CarouselSlider
                    slides={[rust_icon, dart_icon, dotnet_icon]}
                  ></CarouselSlider>
                </div>
              </MyGrid>

              {/* grid 6 */}
              <MyGrid
                columnFrom={18}
                rowFrom={8}
                columnSpans={5}
                rowSpans={5}
                position={centerIsInView}
                animationName="fadein-right"
                animationDuration="1s"
                gridref={(el) => setRef(el, 5)}
                classname={`${hoverEnabled ? "hover-enabled" : ""}`}
              >
                <div className="card-content">
                  <h1>Game assets</h1>
                </div>
              </MyGrid>

              {/* grid 7 */}
              <MyGrid
                columnFrom={23}
                rowFrom={8}
                columnSpans={9}
                rowSpans={7}
                onClick={() => nextPath("/experience")}
                position={centerIsInView}
                animationName="fadein-right"
                gridref={(el) => setRef(el, 6)}
                classname={`${hoverEnabled ? "hover-enabled" : ""}`}
              >
                <div className="card-content">
                  <h1>Working Experience</h1>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="225"
                    viewBox="0 -20 30 197"
                    fill="none"
                  >
                    <text
                      x="-120"
                      y="16"
                      fill="#F5F5F5"
                      style={{ fontSize: 14 }}
                    >
                      Indie App Dev
                    </text>
                    <text
                      x="-120"
                      y="36"
                      fill="#F5F5F5"
                      style={{ fontSize: 12 }}
                    >
                      2024 - current
                    </text>
                    <text x="30" y="78" fill="#F5F5F5" style={{ fontSize: 14 }}>
                      Software Engineer
                    </text>
                    <text x="30" y="98" fill="#F5F5F5" style={{ fontSize: 12 }}>
                      2022 - 2023
                    </text>
                    <text
                      x="-120"
                      y="145"
                      fill="#F5F5F5"
                      style={{ fontSize: 14 }}
                    >
                      SE Internship
                    </text>
                    <text
                      x="-120"
                      y="165"
                      fill="#F5F5F5"
                      style={{ fontSize: 12 }}
                    >
                      2020 - 2021
                    </text>
                    <circle cx="11" cy="11" r="11" fill="#F5F5F5" />
                    <circle cx="11" cy="73" r="8" fill="#F5F5F5" />
                    <circle cx="11" cy="140" r="8" fill="#F5F5F5" />

                    <path d="M11 14V235" stroke="#F5F5F5" stroke-width="1.5" />
                  </svg>
                </div>
              </MyGrid>

              {/* grid 8 */}
              <MyGrid
                columnFrom={9}
                rowFrom={13}
                columnSpans={14}
                rowSpans={2}
                position={centerIsInView}
                animationName="fadein-upward"
                gridref={(el) => setRef(el, 7)}
                classname={`${hoverEnabled ? "hover-enabled" : ""}`}
              >
                <div className="card-content">
                  <p>My Statement today is not giving up</p>
                </div>
              </MyGrid>

              {/* grid 9 */}
              <MyGrid
                columnFrom={9}
                rowFrom={15}
                columnSpans={14}
                rowSpans={6}
                position={centerIsInView}
                animationName="fadein-upward"
                animationDuration="3s"
                gridref={(el) => setRef(el, 8)}
                classname={`${hoverEnabled ? "hover-enabled" : ""}`}
              >
                <div className="card-content">
                  <h1>Album</h1>
                </div>
              </MyGrid>

              {/* grid 10 */}
              <MyGrid
                columnFrom={23}
                rowFrom={15}
                columnSpans={9}
                rowSpans={3}
                position={centerIsInView}
                animationName="fadein-right"
                animationDuration="3s"
                gridref={(el) => setRef(el, 9)}
                classname={`${hoverEnabled ? "hover-enabled" : ""}`}
              >
                <div className="card-content">
                  <h3>Brigham Young University - Idaho</h3>
                  <h2>B.S. in Computer Science Graduate</h2>
                  <h3>Dec 2021</h3>
                </div>
              </MyGrid>

              {/* grid 11 */}
              <MyGrid
                columnFrom={23}
                rowFrom={18}
                columnSpans={9}
                rowSpans={3}
                position={centerIsInView}
                animationName="fadein-right"
                gridref={(el) => setRef(el, 10)}
                classname={`${hoverEnabled ? "hover-enabled" : ""}`}
              >
                <div className="card-content" sx={{}}>
                  <h1>Social Media</h1>
                  <ScoialMediaCenter>
                    <img
                      src={linkedin_icon}
                      alt="linkedin"
                      className="social-media-icon"
                      color="white"
                      onClick={() =>
                        handleClickNavigate(
                          "https://www.linkedin.com/in/ckleung/"
                        )
                      }
                      // style={social_media_icon}
                    />
                    <img
                      src={github_icon}
                      className="social-media-icon"
                      onClick={() =>
                        handleClickNavigate("https://github.com/ck2244hk")
                      }
                      // style={social_media_icon}
                      alt="github"
                    />
                    <img
                      src={discord_icon}
                      className="social-media-icon"
                      onClick={() =>
                        handleClickNavigate(
                          "https://discordapp.com/users/1192151709103951945"
                        )
                      }
                      // style={social_media_icon}
                      alt="discord"
                    />
                  </ScoialMediaCenter>
                </div>
              </MyGrid>

              {/* grid Cat */}
              {/* <MyGrid
              columnFrom={7}
              rowFrom={6}
              columnSpans={2}
              rowSpans={1}
              position={centerIsInView}
              animationName="fadein-right"
            //   gridref={(el) => setRef(el, 11)}
              classname={`${hoverEnabled ? "hover-enabled" : ""}`}
            >
              <div className="card-content" sx={{ paddingTop: "35px" }}>
                <h1>
                  Proud to be a Hong Konger
                </Typography>
              </div>
            </MyGrid> */}
            </Box>
          </div>
        </Box>
      </Box>
      <Box sx={{ height: "100vh", position: "relative", zIndex: "-1" }} />
      <Box
        sx={{ height: "100px", position: "relative", zIndex: "-1" }}
        ref={centerRef}
      />
      <Box sx={{ height: "100vh", position: "relative", zIndex: "-1" }} />
      <Bottom></Bottom>

      <Fab
        size="medium"
        aria-label="add"
        sx={{ right: "100px", bottom: "100px", position: "fixed" }}
      >
        <ArrowDownwardIcon />
      </Fab>

      {/* 
        <Box style={projectIsInView >= 0 ? projectIsInView === 0 ? gridItemStyle : [gridItemStyle, { opacity: '0.5' }] : { opacity: '0' }}>
            <Card sx={{ minWidth: 300, minHeight: 400 }}>
                <div className="card-content">
                    <Typography sx={{ fontSize: 14 }} color="text.projectary" gutterBottom>
                        Working In Progress
                    </Typography>
                    <h1>
                        Progression Overpower
                    </Typography>
                    <CardMedia
                        sx={{ height: 400 }}
                        image={prgrss_op}
                        title="green iguana"
                    />
                    <Typography variant="body2">
                        Embark on an epic adventure in this charming pixel-style mobile RPG,
                        where strategy and skillful decision-making are key to success.
                        Progression Overpower: The Pixel Pioneers features a finely tuned leveling up system that rewards careful planning and execution.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </div>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Box>

        <Box style={expIsInView >= 0 ? expIsInView === 0 ? gridItemStyle : [gridItemStyle, { opacity: '0.5' }] : { opacity: '0' }} >
            <Card sx={{ minWidth: 300, minHeight: 400 }}>
                <div className="card-content">
                    <Typography sx={{ fontSize: 14 }} color="text.projectary" gutterBottom>
                        Working In Progress
                    </Typography>
                    <h1>
                        Anecedote
                    </Typography>
                    <CardMedia
                        sx={{ height: 400 }}
                        image={anecdote}
                        title="green iguana"
                    />
                    <Typography variant="body2">
                        Anecdote is a unique journaling app that not only helps you cultivate a daily writing habit but also connects you with others who share similar interests, struggles, or goals.
                        This community-driven platform fosters meaningful relationships, sparks inspiration, and empowers personal growth.
                    </Typography>
                </div>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Box> */}

      {/* </Container> */}
    </Content>
  );
}

export default Home;
