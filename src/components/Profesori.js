import React, { useEffect, useState } from "react";
import axios from "axios";

const Profesori = () => {
  const [profi, setProfi] = useState([]);
  console.log("profi: ", profi);

  useEffect(() => {
    axios("http://localhost/php-rest-school/api/profesor/read.php").then(
      (response) => setProfi(response.data)
    );
  }, []);
  return (
    <div style={{ marginTop: "50px" }}>
      {profi.map((prof) => {
        return (
          <div key={prof.id} className="prof-style">
            {prof.nume}
            <span> {prof.prenume}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Profesori;
