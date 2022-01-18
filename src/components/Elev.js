import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Button, Card } from "react-bootstrap";

const Elev = () => {
  const [elev, setElev] = useState({});
  console.log("elev: ", elev);
  const params = useParams();
  useEffect(() => {
    axios(
      `http://localhost/php-rest-school/api/elev/read_single.php?elev_id=${params.elevId}`
    ).then((response) => setElev(response.data));
  }, [params]);

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
          <Button variant="success" size="sm">
            Adauga Nota
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Elev;
