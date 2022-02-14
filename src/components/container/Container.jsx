import "./container.css";
import React, { useState, useEffect } from "react";
import AmountInput from "./inputs/amountInput/AmountInput";
import LengthInput from "./inputs/lengthInput/LengthInput";
import CheckBox from "./inputs/checkBox/CheckBox";
import Result from "./result/Result";
import PropTypes from "prop-types";

export default function Container(props) {
  const [amount, setAmount] = useState(5000);
  const [length, setlength] = useState(24);
  const [insurance, setInsurance] = useState(false);

  return (
    <>
      <div className="calc-container">
        <AmountInput
          data={props.data}
          changeValue={(amount) => setAmount(amount)}
        />

        <LengthInput
          data={props.data}
          changeValue={(length) => setlength(length)}
        />

        <CheckBox
          data={props.data}
          changeValue={(insurance) => setInsurance(insurance)}
        />
      </div>
      <div className="result-container">
        <Result
          data={props.data}
          amount={amount}
          length={length}
          insurance={insurance}
        />
      </div>
    </>
  );
}

Container.propTypes = {
  props: PropTypes.object
};
