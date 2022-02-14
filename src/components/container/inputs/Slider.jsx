import PropTypes from "prop-types";

export default function Slider(props) {
  const { min, max, value, handleValue, handleValidations } = props;
  return (
    <>
      <div className="rangeInput">
        <input
          type="range"
          className="slider"
          onBlur={handleValidations}
          onChange={handleValue}
          min={min}
          max={max}
          value={value}
        />
      </div>
    </>
  );
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  handleValue: PropTypes.func,
  handleValidations: PropTypes.func
};
