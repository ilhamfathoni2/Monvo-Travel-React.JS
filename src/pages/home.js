import React from "react";
import Popular from "../components/home/popular";
import { Container } from "react-bootstrap";
import Other from "../components/home/other";
import Tagline from "../components/home/tagline";

function Home() {
  return (
    <>
      <Container>
        <Tagline />
        <Popular />
        <Other />
      </Container>
    </>
  );
}

export default Home;
