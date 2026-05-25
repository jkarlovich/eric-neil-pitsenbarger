import React from "react";
import "./App.css";
import { CalendarImages } from "./Images/Images";

function Calendar({ classStyle }) {
  return (
    <div className={"calendar-page"}>
      {CalendarImages.map((image) => (
        <img
          loading="eager"
          className="thumbnail"
          style={{ width: "44%" }}
          src={image.full}
          alt={image.text}
        ></img>
      ))}
    </div>
  );
}

export default Calendar;
