import React, { useState, useEffect, Fragment } from "react";
import { Grid, TextField, CircularProgress } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { getByCity, getByCords } from "./services";
import ShowWheather from "./components/ShowWheather";
import { getCurrentLocation } from "./helpers/utils";

import "./style/main.scss";

function App() {
  const [data, setData] = useState({});
  const [ready, setReady] = useState(false);
  const [locations, setLocations] = useState([
    "Buenos Aires",
    "Pergamino",
    "Trenque Lauquen",
    "Tigre",
    "Chivilcoy",
  ]);
  const [currentCity, setCurrentCity] = useState("");

  // aca gestionamos el evento del cambio de autocomplete
  const handleChange = (e) => {
    if (e.target.textContent === "") {
      return;
    }
    setReady(false);
    setCurrentCity(e.target.textContent);
    getByCity(e.target.textContent, succesCitys, errorCitys);
  };

  // este seria el equivalente del componentDidMount de una clase
  // buscamos la locacion del navegador y llamamos a la api con esas cordenadas
  useEffect(() => {
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition((data) => {
          getByCords(getCurrentLocation(data), succesCitys, errorCitys);
        })
      : setCurrentCity("");
  }, []);

  //los servicios los llamo siempre con callbacksucces y error este es el succes
  // aca seteamos la data y una vez con data hacemos que se renderice con el ready
  const succesCitys = (data) => {
    setReady(true);
    setData(data);
    let aux = locations;
    if (locations.indexOf(data.city.name) === -1) aux.push(data.city.name);

    setLocations(aux);
    setCurrentCity(data.city.name);
  };

  //si falla alguna vez el servicio vamos a tener en consola la info de por que

  const errorCitys = (err) => {
    console.log(err);
    setReady(true);
  };
  return (
    <Grid>
      <h1>Pronóstico</h1>
      {ready && (
        <Fragment>
          {" "}
          <Autocomplete
            id="combo-box-demo"
            onChange={handleChange}
            value={currentCity}
            options={locations}
            getOptionSelected={(option) => {
              console.log(option);
            }}
            getOptionLabel={(option) => option}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Ciudad" variant="outlined" />
            )}
          />
          {data.list !== undefined && (
            <ShowWheather list={data.list}></ShowWheather>
          )}
        </Fragment>
      )}

      {!ready && (
        <div className="pending">
          <CircularProgress thickness={4.0} size={70}></CircularProgress>
        </div>
      )}
    </Grid>
  );
}

export default App;
