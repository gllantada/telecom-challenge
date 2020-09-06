import React from "react";
import { format } from "date-fns";

export default function ({ data, style }) {
  return (
    <div className="partial" style={style}>
      <h5>{format(new Date(data.dt_txt), "HH:mm")}hs</h5>
      <h6>Temperatura: {data.main.temp}º</h6>
      <h6>Humedad: {data.main.humidity}%</h6>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="icono del estado del clima"
      ></img>
    </div>
  );
}
