import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

export const Menu = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("users");
    navigate("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Prueba</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>

            <button onClick={logout} className="logout" >Logout</button >
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
