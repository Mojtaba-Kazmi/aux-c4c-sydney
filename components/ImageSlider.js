import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { ArrowLeftOutlined } from "@mui/icons-material";
import { ArrowRightOutlined } from "@mui/icons-material";
import Container from '@mui/material/Container';
import { mobile } from "./Responsive";

const AllContainer = styled(Container)`
  width: 100%;
  height: 80vh;
  display: flex;
  background-color: #03b437;
  position: relative;
  overflow: hidden;
  ${mobile({ height: "100vh" })}
`;
const Arrow = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translate(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  ${mobile({
    width: "50px",
    height: "900px",
  })}
`;
const ImageSize = styled(Image)`
  height: 80%;
  ${mobile({
    height: "50%",
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding-bottom: 140px;
  padding-right: 250px;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    marginLeft: "-300px",
    marginRight: "30px",
    marginBottom: "-300px",
  })}
`;
const Title = styled.h1`
  font-size: 52px;
  ${mobile({
    marginTop: "100px",
    marginBottom: "-40px",
    fontSize: "25px",
  })}
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({
    fontSize: "15px",
    fontWeight: "500",
    letterSpacing: "0px",
  })}
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  border-radius: 6px;
  color: #fff7f7;
  border-color: #fff7f7;
  background-color: black;
  cursor: pointer;
  ${mobile({
    marginRight: "200px",
  })}
`;

const ImageSlider = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2); //the maximum value of the slideIndex should be 2, not 3.
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0); //the minimum value of the slideIndex should be 0, not -1.
    }
  };

  return (
    <>
      <AllContainer  maxWidth="ls">
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {images.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <ImageSize
                  src={item.url}
                  alt={item.title}
                  width={500}
                  height={500}
                />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button> Call Now</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </AllContainer>
    </>
  );
};

export default ImageSlider;
