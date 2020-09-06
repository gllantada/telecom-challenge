import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("does pronostico render", () => {
  // expect("hola").toBeEqual("hola");
  const { getByText } = render(<App></App>);
  const linkElement = getByText(/Pronóstico/i);

  expect(linkElement).toBeInTheDocument();
});
