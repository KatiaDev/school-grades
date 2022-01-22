import React, { useEffect, useState } from "react";
import {
  Route,
  useParams,
  useRouteMatch,
  useHistory,
  Switch,
} from "react-router";
import axios from "axios";
import { Button, Card, Table } from "react-bootstrap";
import AddNota from "./AddNota";

const Elev = () => {
  const [elev, setElev] = useState({});
  const [note, setNote] = useState([]);
  console.log("elev: ", elev);
  const params = useParams();
  const match = useRouteMatch();
  console.log("match", match);
  const history = useHistory();

  useEffect(() => {
    axios(
      `http://localhost/php-rest-school/api/elev/read_single.php?elev_id=${params.elevId}`
    ).then((response) => setElev(response.data));
  }, [params]);

  useEffect(() => {
    axios("http://localhost/php-rest-school/api/nota/read.php").then(
      (response) => setNote(response.data)
    );
  }, []);

  return (
    <>
      <Card className="text-center" border="warning">
        <Card.Header>
          <strong>
            {elev.nume} {elev.prenume}
          </strong>
          <span style={{ color: "blue", marginLeft: "10px" }}>
            {" "}
            {elev.email}
          </span>
        </Card.Header>
        <Card.Body>
          <Card.Title>Reușita</Card.Title>
          <Card.Text>Semestrul I 2022</Card.Text>
          <Button
            variant="success"
            size="sm"
            onClick={() => history.push(`${match.url}/addNota`)}
          >
            Adauga Nota
          </Button>
        </Card.Body>
      </Card>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Disciplina</th>
            <th>Nota</th>
            <th>Tema</th>
            <th>Data</th>
            <th>Profesor</th>
            <th>Optiuni</th>
          </tr>
        </thead>
        <tbody>
          {note.map((nota) => {
            return (
              <tr key={nota.id}>
                <td>{nota.id}</td>
                <td>{nota.disciplina}</td>
                <td>{nota.nota}</td>
                <td>{nota.tema}</td>
                <td>{nota.data}</td>
                <td>
                  {nota.prof_nume} {nota.prof_prenume}
                </td>
                <td>
                  <Button
                    size="sm"
                    onClick={() => history.push(`${match.url}/editNota`)}
                  >
                    Edit
                  </Button>{" "}
                  <Button size="sm" variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Switch>
        <Route path={`${match.path}/addNota`}>
          <AddNota />
        </Route>
        <Route path={`${match.path}/editNota`}></Route>
      </Switch>
    </>
  );
};

export default Elev;
