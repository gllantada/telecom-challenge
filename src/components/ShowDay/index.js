import React from "react";
import ShowPartial from "./../ShowPartial";
import { format } from "date-fns";
export default function ({ data, day }) {
  console.log(JSON.stringify(data));
  const style = {
    maxWidth: data.length < 2 ? "120px" : "inherit",
  };
  return (
    <div className="day">
      <h3>
        {day === 0
          ? "Hoy"
          : day === 1
          ? "Mañana"
          : format(new Date(data[0].dt_txt), "d/M/y")}
      </h3>
      <span>
        {data.map((partial, i) => {
          return (
            <ShowPartial
              data-testid="temp"
              key={i}
              data={partial}
              style={style}
            ></ShowPartial>
          );
        })}
      </span>
    </div>
  );
}
