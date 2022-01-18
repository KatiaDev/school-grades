import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <h3>Catalog Electronic </h3>Liceul Teoretic "Petre Ștefănucă"
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Ecaterina Popa</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ marginTop: "50px", background: "#bee0ec" }}>
        <Nav className="justify-content-center" activeKey="/home">
          <Link to="/elevi" className="nav-link">
            Elevi
          </Link>
          <Link to="/discipline" className="nav-link">
            Discipline
          </Link>
          <Link to="/profesori" className="nav-link">
            Profesori
          </Link>
          <Link to="/orar" className="nav-link">
            Orar
          </Link>
        </Nav>
      </div>
    </>
  );
};

export default Navigation;
