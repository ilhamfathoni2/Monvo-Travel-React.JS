import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container, Card, Alert, Image } from "react-bootstrap";
import "./home.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import santorini from "../../assets/santorini1.jpg";
import eiffel from "../../assets/eiffelTower.jpg";
import giethoorn from "../../assets/giethoorn-belanda.jpg";

function Popular() {
  let navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <Container className="py-5">
        <Slider {...settings}>
          <div className="d-flex justify-content-center">
            <Image src={santorini} className="img-popular" />
          </div>
          <div className="d-flex justify-content-center">
            <Image src={eiffel} className="img-popular" />
          </div>
          <div className="d-flex justify-content-center">
            <Image src={giethoorn} className="img-popular" />
          </div>
        </Slider>
      </Container>
    </>
  );
}

export default Popular;
