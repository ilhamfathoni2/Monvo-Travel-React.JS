import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Image } from "react-bootstrap";
import "./home.css";

import santorini from "../../assets/santorini1.jpg";
import eiffel from "../../assets/eiffelTower.jpg";
import giethoorn from "../../assets/giethoorn-belanda.jpg";
import star5 from "../../assets/star5.png";
import star4 from "../../assets/star4.png";
import star3 from "../../assets/star3.png";
import star2 from "../../assets/star2.png";
import star1 from "../../assets/star1.png";
import { MdLocationPin } from "react-icons/md";

function Other() {
  let navigate = useNavigate();

  return (
    <>
      <Container className="mt-3 mb-8">
        <h6 className="title-popular">Other</h6>
        <Card className="card-others mt-2">
          <Card.Body className="d-flex">
            <div className="img-left">
              <Image src={santorini} className="img-other" />
            </div>
            <div>
              <h6 className="place">Santorini</h6>
              <p className="country">
                <MdLocationPin className="map" />
                Yunani
              </p>
              <p className="price">25.000.000</p>
              <Image src={star4} className="star" />
            </div>
          </Card.Body>
        </Card>
        <Card className="card-others mt-2">
          <Card.Body className="d-flex">
            <div className="img-left">
              <Image src={eiffel} className="img-other" />
            </div>
            <div>
              <h6 className="place">Eiffel Tower</h6>
              <p className="country">
                <MdLocationPin className="map" />
                Yunani
              </p>
              <p className="price">18.000.000</p>
              <Image src={star3} className="star" />
            </div>
          </Card.Body>
        </Card>
        <Card className="card-others mt-2">
          <Card.Body className="d-flex">
            <div className="img-left">
              <Image src={giethoorn} className="img-other" />
            </div>
            <div>
              <h6 className="place">Giethoorn</h6>
              <p className="country">
                <MdLocationPin className="map" />
                Yunani
              </p>
              <p className="price">16.000.000</p>
              <Image src={star4} className="star" />
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Other;
