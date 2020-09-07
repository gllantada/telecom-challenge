import axios from "axios";
import { APPID } from "./../config";
const headers = {
  // "Sec-Fetch-Mode": "cors"
};
const instance = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5",
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
});

// este servicio me permite con determinadas coordenadas traer el pronostico a 5 dias
// se podria haber gestionado en el mismo servicio con condicional sobre los datos que recibo
// pero me parecia mas prolijo segmentarlo
export const getByCords = (cords, callbackSucces, callbackError) => {
  instance
    .get(
      `/forecast?groupby=date,uk&lat=${cords.latitude}&lon=${cords.longitude}&APPID=${APPID}&lang=es&units=metric`,
      { headers }
    )
    .then((data) => {
      callbackSucces(data.data);
    })
    .catch((err) => callbackError(err));
};

// este servicio me permite con el nombre de una ciudad traer el pronostico a 5 dias

export const getByCity = (text, callbackSucces, callbackError) => {
  instance
    .get(
      `/forecast?q=${text},groupby=date,type=like,uk&APPID=${APPID}&lang=es&units=metric`,
      { headers }
    )
    .then((data) => {
      callbackSucces(data.data);
    })
    .catch((err) => callbackError(err));
};
