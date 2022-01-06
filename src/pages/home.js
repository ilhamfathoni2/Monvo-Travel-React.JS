import React from "react";
import Popular from "../components/home/popular";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <>
      <Container className="py-5">
        <Popular />
      </Container>
    </>
  );
}

export default Home;
