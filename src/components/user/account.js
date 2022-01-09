import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Image } from "react-bootstrap";
import "./user.css";
import { FiArrowLeft, FiMail, FiLogOut } from "react-icons/fi";
import avatar from "../../assets/Avatar.png";
import { UserContext } from "../../context/userContext";

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
      <Container>
        <FiArrowLeft
          className="mt-4 icon-back"
          onClick={() => {
            navigate("/home");
          }}
        />
        <div className="d-flex justify-content-center mb-5">
          <Image src={avatar} className="avatar-account mt-3" />
        </div>
        <div className="d-flex list">
          <FiMail className="icon-user" />
          <p>ilham@gmail.com</p>
        </div>
        <div className="d-flex list text-danger" onClick={handleLogout}>
          <FiLogOut className="icon-user" />
          <p>Logout</p>
        </div>
      </Container>
    </>
  );
}

export default AccountUser;
