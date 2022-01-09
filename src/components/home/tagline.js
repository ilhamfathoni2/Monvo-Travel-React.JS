import React from "react";
import { Container, Image } from "react-bootstrap";
import avatar from "../../assets/Avatar.png";
import "./home.css";

function Tagline() {
  return (
    <Container>
      <div class="d-flex justify-content-between">
        <h3 className="tagline-home mt-4 mb-4">Explore the Beautiful world!</h3>
        <Image src={avatar} className="avatar" />
      </div>
    </Container>
  );
}

export default Tagline;
