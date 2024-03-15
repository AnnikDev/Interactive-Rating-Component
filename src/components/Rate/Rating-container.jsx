import "./rating-container.css";
import StarIcon from "/images/icon-star.svg";

import { useState } from "react";

export default function Rate({ setSubmit, rate, setRate }) {
  let buttons = [1, 2, 3, 4, 5];
  return (
    <div className="rating-container">
      <img src={StarIcon} alt="" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating-buttons">
        {buttons.map((button, index) => (
          <button
            className="buttons"
            onClick={() => setRate(button)}
            key={index}
            style={
              rate === button
                ? { backgroundColor: "#7c8798", color: "white" }
                : {}
            }
          >
            {button}
          </button>
        ))}
      </div>
      <button
        className="submit-button"
        onClick={() => [rate && setSubmit(true)]}
      >
        SUBMIT
      </button>
    </div>
  );
}
