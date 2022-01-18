import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Button, Table } from "react-bootstrap";

const Elevi = () => {
  const [elevi, setElevi] = useState([]);
  console.log("elevi: ", elevi);

  const history = useHistory();
  useEffect(() => {
    axios("http://localhost/php-rest-school/api/elev/read.php").then(
      (response) => setElevi(response.data)
    );
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nume</th>
            <th>Prenume</th>
            <th>Email</th>
            <th>Opțiuni</th>
          </tr>
        </thead>
        <tbody>
          {elevi.map((elev) => {
            return (
              <tr key={elev.id}>
                <td>{elev.id}</td>
                <td>{elev.nume}</td>
                <td>{elev.prenume}</td>
                <td>{elev.email}</td>
                <td>
                  <Button
                    size="sm"
                    onClick={() => history.push(`/elevi/${elev.id}`)}
                  >
                    Detalii
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Elevi;
