import Rate from "../Rate/Rating-container";
import "./result.css";
import resultImg from "/images/illustration-thank-you.svg";

export default function Result({ rate }) {
  return (
    <div className="submit-container">
      <img src={resultImg} alt="" />
      <h3>You selected {rate} out of 5</h3>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
