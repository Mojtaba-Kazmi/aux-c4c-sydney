import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { mobile } from "./Responsive";
import { AboutUsContent } from "@/pages/api/home-content";

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0px;
  padding-bottom: 30px;
  font-size: 52px;
  font-weight: bold;
  margin-bottom: 50px;
  ${mobile({
    paddingTop: "0px",
    paddingBottom: "15px",
    fontSize: "25px",
  })}
`;

export default function AboutCompany() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Heading>ABOUT US </Heading>
        <Box>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="500"
              image="/assets/Aux Cash For Car Removal.webp"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <strong>AUX Cash for Car Sydney</strong>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {AboutUsContent}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}
