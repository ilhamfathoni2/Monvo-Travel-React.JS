import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./nav.css";
import {
  MdHomeFilled,
  MdNotifications,
  MdBookmark,
  MdPerson,
} from "react-icons/md";

function Nav() {
  let navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <Container className="d-flex justify-content-between mrg-nav">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "icon-nav-active" : "icon-nav"
            }
          >
            <MdHomeFilled />
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "icon-nav-active" : "icon-nav"
            }
          >
            <MdBookmark />
          </NavLink>
          <NavLink
            to="/notif"
            className={({ isActive }) =>
              isActive ? "icon-nav-active" : "icon-nav"
            }
          >
            <MdNotifications />
          </NavLink>
          <NavLink
            to="/user"
            className={({ isActive }) =>
              isActive ? "icon-nav-active" : "icon-nav"
            }
          >
            <MdPerson />
          </NavLink>
        </Container>
      </div>
    </>
  );
}

export default Nav;
