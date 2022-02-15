import React, { useState } from "react";
import "./../inputs.css";
import MaxMinValidationFc from "./../../../../helper/MaxMinValidationFc";
import MaxMin from "./../MaxMin";
import Slider from "./../Slider";
import NumberInput from "./../NumberInput";
import PropTypes from "prop-types";

export default function LengthInput(props) {
  const { lengthMin, lengthMax } = props.data;
  const { changeValue } = props;
  const [value, setValue] = useState(24);

  function handleValidations(event) {
    var eventValue = MaxMinValidationFc(
      event.target.value,
      lengthMin,
      lengthMax
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
        <span className="title">Délkou splácení si určete výšku splátky</span>

        <NumberInput
          value={Number(value)}
          handleValue={handleValue}
          handleValidations={handleValidations}
        />

        <Slider
          max={lengthMax}
          min={lengthMin}
          value={Number(value)}
          handleValue={handleValue}
          handleValidations={handleValidations}
        />
        <MaxMin max={lengthMin} min={lengthMax} type="months" />
      </div>
    </>
  );
}

Slider.propTypes = {
  lengthMax: PropTypes.number,
  lengthMin: PropTypes.number,
  changeValue: PropTypes.func
};
