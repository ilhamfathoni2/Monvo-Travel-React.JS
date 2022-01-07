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

import santorini from "../../assets/santorini1.jpg";
import eiffel from "../../assets/eiffelTower.jpg";
import giethoorn from "../../assets/giethoorn-belanda.jpg";
import { FiSearch } from "react-icons/fi";
import Nvabar from "../nav/navbar";

function Other() {
  let navigate = useNavigate();

  return (
    <>
      <Container className="mt-3 mb-8">
        <h6 className="title-popular">Other</h6>
        <div className="d-flex flex-wrap">
          <Card className="card-other">
            <Card.Body>
              <div className="d-flex justify-content-center">
                <Image src={santorini} className="img-other" />
              </div>
              <h6 className="place">Santorini</h6>
              <p className="country">Yunani</p>
              <p className="price">25.000.000</p>
            </Card.Body>
          </Card>
          <Card className="card-other">
            <Card.Body>
              <div className="d-flex justify-content-center">
                <Image src={eiffel} className="img-other" />
              </div>
              <h6 className="place">Eiffel Tower</h6>
              <p className="country">French</p>
              <p className="price">15.000.000</p>
            </Card.Body>
          </Card>
          <Card className="card-other">
            <Card.Body>
              <div className="d-flex justify-content-center">
                <Image src={giethoorn} className="img-other" />
              </div>
              <h6 className="place">Giethoorn</h6>
              <p className="country">Netherlands</p>
              <p className="price">16.000.000</p>
            </Card.Body>
          </Card>
          <Card className="card-other">
            <Card.Body>
              <div className="d-flex justify-content-center">
                <Image src={santorini} className="img-other" />
              </div>
              <h6 className="place">Santorini</h6>
              <p className="country">Yunani</p>
              <p className="price">25.000.000</p>
            </Card.Body>
          </Card>
          <Card className="card-other">
            <Card.Body>
              <div className="d-flex justify-content-center">
                <Image src={giethoorn} className="img-other" />
              </div>
              <h6 className="place">Giethoorn</h6>
              <p className="country">Netherlands</p>
              <p className="price">16.000.000</p>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Other;
