import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Image, Card } from "react-bootstrap";
import "./user.css";
import { FiMail, FiLogOut, FiPhone, FiMapPin } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import avatar from "../../assets/Avatar.png";
import { UserContext } from "../../context/userContext";
import Nav from "../nav/navbar";

function AccountUser() {
  const [, dispatch] = useContext(UserContext);
  let navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  return (
    <>
      <Nav />
      <Container className="user-space">
        <div className="d-flex justify-content-center mb-3">
          <Image src={avatar} className="avatar-account mt-3" />
        </div>
        <Card className="card-user">
          <div className="d-flex list">
            <AiOutlineUser className="icon-user" />
            <p>Ilham Fathoni</p>
          </div>
          <div className="d-flex list">
            <FiMail className="icon-user" />
            <p>ilham@gmail.com</p>
          </div>
          <div className="d-flex list">
            <FiPhone className="icon-user" />
            <p>0821xxxxxxxxx</p>
          </div>
          <div className="d-flex list">
            <FiMapPin className="icon-user" />
            <p>Sidoarjo, Jawa Timur</p>
          </div>
          <div className="d-flex list text-danger mt-4" onClick={handleLogout}>
            <FiLogOut className="icon-user" />
            <p>Logout</p>
          </div>
        </Card>
      </Container>
    </>
  );
}

export default AccountUser;
