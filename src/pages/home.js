import React from "react";
import Popular from "../components/home/popular";
import { Container } from "react-bootstrap";
import Other from "../components/home/other";

function Home() {
  return (
    <>
      <Container className="py-5">
        <Popular />
        <Other />
      </Container>
    </>
  );
}

export default Home;
