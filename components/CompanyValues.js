import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styleds from "styled-components";
import { styled } from "@mui/material/styles";
import { mobile } from "./Responsive";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { SatisfactionAndComplianceContent, content } from "@/pages/api/home-content";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const Heading = styleds.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 30px;
  font-size: 52px;
  font-weight: bold;
  margin-bottom: 50px;
  ${mobile({
    paddingTop: "80px",
    paddingBottom: "15px",
    fontSize: "25px",
  })}
`;


export default function CompanyValues() {
 
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Heading>OUR VALUES </Heading>
        <Box sx={{ bgcolor: "#c8e6c9", height: "100vh", borderRadius: "4px" }}>
          <Root style={{ padding: "20px"}}>
            {content}
            <Divider textAlign="left">
              <Chip label="Satisfaction and Compliance" />
            </Divider>
            {SatisfactionAndComplianceContent}
          </Root>
        </Box>
      </Container>
    </React.Fragment>
  );
}
