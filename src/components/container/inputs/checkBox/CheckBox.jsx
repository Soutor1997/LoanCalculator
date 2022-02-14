import React, { useState } from "react";
import "./checkBox.css";
import Currency from "./../../currency/Currency";
import PropTypes from "prop-types";

export default function CheckBox(props) {
  const { insuranceValue } = props.data;
  const [check, setCheck] = useState(true);

  function handleCheck(event) {
    const check = event.target.checked;
    setCheck(check);
    props.changeValue(check);
  }

  return (
    <>
      <div className="checkbox">
        <input id="box" type="checkbox" onChange={handleCheck} value={check} />
        <label className="checkbox-tooltip" htmlFor="box">
          {insuranceValue} <Currency /> - Pojištění úvěru
        </label>
      </div>
    </>
  );
}

CheckBox.propTypes = {
  insuranceValue: PropTypes.number,
  changeValue: PropTypes.func
};
