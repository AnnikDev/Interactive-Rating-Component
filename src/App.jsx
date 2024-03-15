import "./App.css";
import "./index.css";
import Rate from "./components/Rate/Rating-container";
import Result from "./components/Result/Result";
import { useState } from "react";

function App() {
  const [submit, setSubmit] = useState(false);
  const [rate, setRate] = useState(null);
  return (
    <>
      {" "}
      {submit ? (
        <Result rate={rate} />
      ) : (
        <Rate setSubmit={setSubmit} rate={rate} setRate={setRate} />
      )}
    </>
  );
}

export default App;
