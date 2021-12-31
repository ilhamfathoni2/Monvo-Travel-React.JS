import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { API } from "../../config/api";
import { Button, Form, Container, Card, Alert, Image } from "react-bootstrap";
import {
  FiAlertTriangle,
  FiArrowLeft,
  FiMail,
  FiLock,
  FiUser,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import "./auth.css";

import { useFormik } from "formik";
import * as Yup from "yup";

function Register() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      phone: Yup.number("Input must be number!")
        .min(11, "Minimum 11 characters")
        .required("Required!"),
      address: Yup.string().required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Container>
        <FiArrowLeft
          className="mt-4 icon-back"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="text-center mb-login mt-2">
          <h3 className="title-sign">Create Account</h3>
          <p className="p-sign">Create a new account</p>
        </div>
        <div className="form-space-r">
          <Form onSubmit={formik.handleSubmit}>
            <div className="sp-row">
              <Form.Group className="mb-4">
                <FiUser className="icon-input" />
                <Form.Control
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder="Full name"
                />
                {formik.errors.name && formik.touched.name && (
                  <p className="text-danger alert">
                    <FiAlertTriangle />
                    {formik.errors.name}
                  </p>
                )}
              </Form.Group>
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
                <FiPhone className="icon-input" />
                <Form.Control
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  placeholder="Phone number"
                />
                {formik.errors.phone && formik.touched.phone && (
                  <p className="text-danger alert">
                    <FiAlertTriangle />
                    {formik.errors.phone}
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-4">
                <FiMapPin className="icon-input" />
                <Form.Control
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  placeholder="Your address"
                />
                {formik.errors.address && formik.touched.address && (
                  <p className="text-danger alert">
                    <FiAlertTriangle />
                    {formik.errors.address}
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
                  CREATE ACCOUNT
                </Button>
              </div>
              <p className="text-center opt">Already have a account?</p>
              <p
                className="p-primary-b text-center opt"
                onClick={() => {
                  navigate("/");
                }}
              >
                Login
              </p>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Register;
