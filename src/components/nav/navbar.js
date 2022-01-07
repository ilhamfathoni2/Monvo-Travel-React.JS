import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./nav.css";
import {
  MdHomeFilled,
  MdNotifications,
  MdBookmark,
  MdPerson,
} from "react-icons/md";

function Nvabar() {
  let navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <Container className="d-flex justify-content-between mrg-nav">
          <MdHomeFilled className="icon-nav" />
          <MdBookmark className="icon-nav" />
          <MdNotifications className="icon-nav" />
          <MdPerson className="icon-nav" />
        </Container>
      </div>
    </>
  );
}

export default Nvabar;
