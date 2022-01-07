import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  Container,
  Card,
  Alert,
  Image,
  InputGroup,
} from "react-bootstrap";
import "./home.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import santorini from "../../assets/santorini1.jpg";
import eiffel from "../../assets/eiffelTower.jpg";
import giethoorn from "../../assets/giethoorn-belanda.jpg";
import { FiSearch } from "react-icons/fi";
import Nvabar from "../nav/navbar";

function Popular() {
  let navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.92,
    slidesToScroll: 1,
  };

  return (
    <>
      <Nvabar />
      <Container>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search Destinations"
            aria-describedby="basic-addon2"
            className="form-search"
          />
          <Button variant="primary" id="button-addon2">
            <FiSearch className="btn-search" />
          </Button>
        </InputGroup>
      </Container>
      <Container className="popular-slider">
        <h6 className="title-popular">Popular</h6>
        <Slider {...settings}>
          <Card className="card-popular">
            <Card.Body>
              <div className="d-flex justify-content-center">
                <Image src={santorini} className="img-popular" />
              </div>
              <h6 className="place">Santorini</h6>
              <p className="country">Yunani</p>
              <p className="price">25.000.000</p>
            </Card.Body>
          </Card>
          <Card className="card-popular">
            <Card.Body>
              <div className="d-flex justify-content-center">
                <Image src={eiffel} className="img-popular" />
              </div>
              <h6 className="place">Eiffel Tower</h6>
              <p className="country">French</p>
              <p className="price">15.000.000</p>
            </Card.Body>
          </Card>
          <Card className="card-popular">
            <Card.Body>
              <div className="d-flex justify-content-center">
                <Image src={giethoorn} className="img-popular" />
              </div>
              <h6 className="place">Giethoorn</h6>
              <p className="country">Netherlands</p>
              <p className="price">16.000.000</p>
            </Card.Body>
          </Card>
        </Slider>
      </Container>
    </>
  );
}

export default Popular;
