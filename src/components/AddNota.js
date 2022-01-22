import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const AddNota = () => {
  return (
    <Container>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Disciplina
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Disciplina" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Nota
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Nota" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Tema
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Tema" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Data
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Data" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Profesor
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Profesor" />
          </Col>
        </Form.Group>
        <Button style={{ marginBottom: "20px" }}>Submit</Button>
      </Form>
    </Container>
  );
};

export default AddNota;
