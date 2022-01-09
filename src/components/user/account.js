import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Image, Card } from "react-bootstrap";
import "./user.css";
import {
  FiMail,
  FiLogOut,
  FiPhone,
  FiMapPin,
  FiShoppingCart,
  FiEdit2,
} from "react-icons/fi";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { RiFileList3Line } from "react-icons/ri";
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
      <Container className="mt-5 mb-user">
        <div className="d-flex justify-content-center mb-4">
          <Image src={avatar} className="avatar-account" />
        </div>
        <h4 className="mt-3 mb-3">My Activity</h4>
        <div className="d-flex list">
          <RiFileList3Line className="icon-user" />
          <p>Transaction List</p>
        </div>
        <div className="d-flex list">
          <FiShoppingCart className="icon-user" />
          <p>Cart</p>
        </div>
        <div className="d-flex list">
          <AiOutlineStar className="icon-user" />
          <p>Review</p>
        </div>

        <h4 className="d-flex mt-3 mb-3">
          Account <FiEdit2 className="edit-icon" />
        </h4>
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
        <h4 className="mt-3 mb-3">Login</h4>
        <div className="d-flex list text-danger" onClick={handleLogout}>
          <FiLogOut className="icon-user" />
          <p>Logout</p>
        </div>
      </Container>
    </>
  );
}

export default AccountUser;
