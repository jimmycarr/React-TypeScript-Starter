import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 48px;
`;
const Title = styled.h1`
  color: white;
`;

class HeaderBar extends React.Component {
  render() {
    return (
      <Container>
        <Title>Garage Starter Example</Title>
      </Container>
    );
  }
}

export default HeaderBar;
