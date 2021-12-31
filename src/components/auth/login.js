import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { API } from "../../config/api";
import { Button, Form, Container, Card, Alert, Image } from "react-bootstrap";
import { FiAlertTriangle, FiMail, FiLock } from "react-icons/fi";
import iconMonvo from "../../assets/icon-login.png";
import "./auth.css";

import { useFormik } from "formik";
import * as Yup from "yup";

function LogIn() {
  let navigate = useNavigate();
  const [, dispatch] = useContext(UserContext);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(5, "Minimum 5 characters")
        .required("Required!"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const body = JSON.stringify(values);
        const response = await API.post("/login", body, config);
        setIsLoading(false);
        if (response.data.status === "success") {
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: response.data.data,
          });
          let userId = JSON.stringify(response.data.data.id);
          localStorage.setItem("id", userId);
          navigate("/register");
        } else {
          navigate("/");
        }
      } catch (error) {
        setIsLoading(false);
        const alert = (
          <Alert variant="danger" className="py-1">
            Worng Email or Password
          </Alert>
        );
        setMessage(alert);
      }
    },
  });

  return (
    <>
      <Container className="py-5">
        <div className="text-center mb-login">
          <Image src={iconMonvo} />
          <h3 className="title-sign">Welcome Back</h3>
          <p className="p-sign">Sign to continue</p>
        </div>
        <div className="form-space">
          <Form onSubmit={formik.handleSubmit}>
            <div className="sp-row">
              <Form.Group className="mb-4">
                <FiMail className="icon-input" />
                <Form.Control
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Email address"
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-danger alert">
                    <FiAlertTriangle />
                    {formik.errors.email}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4">
                <FiLock className="icon-input" />
                <Form.Control
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder="Password"
                />
                {formik.errors.password && formik.touched.password && (
                  <p className="text-danger alert">
                    <FiAlertTriangle />
                    {formik.errors.password}
                  </p>
                )}
              </Form.Group>
              <div className="d-grid gap-2 mt-5 mb-4">
                <Button type="submit" variant="primary" size="lg">
                  LOGIN
                </Button>
              </div>
              <p className="text-center opt">Don’t have account?</p>
              <p
                className="p-primary-b text-center opt"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Create a new account
              </p>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default LogIn;
