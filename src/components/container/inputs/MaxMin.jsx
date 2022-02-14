import { React } from "react";
import PropTypes from "prop-types";
import "./inputs.css";
import Currency from "./../currency/Currency";

export default function MaxMin(props) {
  const { min, max, type } = props;

  return (
    <>
      <div className="min-max">
        <span className="slider-min">
          {min}
          {type === "currency" ? <Currency /> : <span> Měsíců</span>}
        </span>
        <span className="slider-max">
          {max}
          {type === "currency" ? <Currency /> : <span> Měsíců</span>}
        </span>
      </div>
    </>
  );
}

MaxMin.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  type: PropTypes.string
};
