import React, { useState } from "react";
import "./../inputs.css";
import MaxMinValidationFc from "./../../../../helper/MaxMinValidationFc";
import MaxMin from "./../MaxMin";
import Slider from "./../Slider";
import NumberInput from "./../NumberInput";
import PropTypes from "prop-types";

export default function AmountInput(props) {
  const { amountMin, amountMax } = props.data;
  const { changeValue } = props;
  const [value, setValue] = useState(5000);

  function handleValidations(event) {
    const eventValue = MaxMinValidationFc(
      event.target.value,
      amountMin,
      amountMax
    );

    setValue(eventValue);
    changeValue(eventValue);
  }

  function handleValue(event) {
    var eventValue = event.target.value;

    setValue(eventValue);
    changeValue(eventValue);
  }

  return (
    <>
      <div className="input-container">
        <span className="title">Kolik byste si u nás rádi půjčili?</span>
        <NumberInput
          value={Number(value)}
          handleValue={handleValue}
          handleValidations={handleValidations}
        />
        <Slider
          max={amountMax}
          min={amountMin}
          value={value}
          handleValue={handleValue}
          handleValidations={handleValidations}
        />

        <MaxMin max={amountMax} min={amountMin} type="currency" />
      </div>
    </>
  );
}

AmountInput.propTypes = {
  amountMin: PropTypes.number,
  amountMax: PropTypes.number,
  changeValue: PropTypes.func
};
