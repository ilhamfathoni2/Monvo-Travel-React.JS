import React from "react";
import Popular from "../components/home/popular";
import { Container } from "react-bootstrap";
import Other from "../components/home/other";
import Tagline from "../components/home/tagline";
import Nav from "../components/nav/navbar";

function Home() {
  return (
    <>
      <Nav />
      <Tagline />
      <Popular />
      <Other />
    </>
  );
}

export default Home;
