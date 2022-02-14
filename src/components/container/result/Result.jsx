import axios from "axios";
import React, { useEffect, useState } from "react";
import "./result.css";
import "./../headings.css";
import Currency from "./../currency/Currency";

export default function Result(props) {
  const [result, setResult] = useState([]);
  const { amount, length, insurance } = props;
  const { rpsnValue } = props.data;

  useEffect(() => {
    fetchResultData(amount, length, insurance);
  }, [amount, length, insurance]);

  async function fetchResultData(amount, length, insurance) {
    try {
      const response = await axios.get(
        "https://www.myjsme.cz/calcLoan.php?loanAmount=" +
          amount +
          "&length=" +
          length +
          "&insurance=" +
          insurance
      );
      setResult(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="result-grid">
        <p className="title">Vaše výhodná půjčka</p>
        <p>
          Měsíční splátka:{" "}
          <strong>
            {result} <Currency />
          </strong>
        </p>
        <p>Roční úroková sazba od {rpsnValue}%</p>
        <p>RPSN {rpsnValue}%</p>
      </div>
    </>
  );
}
