import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";

const Header = ({ state }) => (
  <>
    <Container>
      <StyledLink link="/">
        <Title>{state.frontity.title}</Title>
      </StyledLink>
      <Description>{state.frontity.description}</Description>
      <Nav />
    </Container>
    
  </>
);

export default connect(Header);

const Container = styled.div`
  width: 1148px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 15px 20px 0px 24px;
  color: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: black;
  display: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.img`
  width: 100px;

`;