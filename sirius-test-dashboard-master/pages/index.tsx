import React from "react";
import Navigation from '../components/Navigation';
import Dashboard from '../components/Dashboard';
import styled from '@emotion/styled';


const Container = styled.div`
  display: flex
`;

export default function Home() {
    return (
      <Container>
          <Navigation />
          <Dashboard />
      </Container>
    );
}
