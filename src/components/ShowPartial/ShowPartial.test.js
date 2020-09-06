import React from "react";
import { render } from "@testing-library/react";
import ShowPartial from "./";
let mock = {
  dt: 1599782400,
  main: {
    temp: 14.88,
    feels_like: 13.5,
    temp_min: 14.88,
    temp_max: 14.88,
    pressure: 1010,
    sea_level: 1010,
    grnd_level: 1008,
    humidity: 90,
    temp_kf: 0,
  },
  weather: [
    { id: 800, main: "Clear", description: "cielo claro", icon: "01n" },
  ],
  clouds: { all: 0 },
  wind: { speed: 3.42, deg: 42 },
  visibility: 10000,
  pop: 0,
  sys: { pod: "n" },
  dt_txt: "2020-09-11 00:00:00",
};

test("Check it render Temperature", async () => {
  // expect("hola").toBeEqual("hola");
  const { findByText } = render(<ShowPartial data={mock}></ShowPartial>);
  const linkElement = await findByText(/Temperatura/i);

  expect(linkElement).toBeInTheDocument();
});
test("Check it render Humedad", async () => {
  // expect("hola").toBeEqual("hola");
  const { findByText } = render(<ShowPartial data={mock}></ShowPartial>);
  const linkElement = await findByText(/Humedad/i);

  expect(linkElement).toBeInTheDocument();
});
