import React, { useState, useEffect } from "react";
import ShowDay from "./../ShowDay";
import { groupByDay } from "./../../helpers/utils";
const ShowWheather = ({ list }) => {
  const [dayList, setDayList] = useState({});
  useEffect(() => {
    setDayList(groupByDay(list));
  }, [list]);
  return (
    <div>
      {Object.keys(dayList).map((key, i) => {
        return <ShowDay data={dayList[key]} key={i} day={i}></ShowDay>;
      })}
    </div>
  );
};

export default ShowWheather;
