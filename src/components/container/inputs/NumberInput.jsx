import PropTypes from "prop-types";

export default function NumberInput(props) {
  const { value, handleValue, handleValidations } = props;

  return (
    <>
      <div className="numberInput">
        <input
          type="number"
          onBlur={handleValidations}
          onChange={handleValue}
          className="value-box"
          value={value}
        />
      </div>
    </>
  );
}

NumberInput.propTypes = {
  value: PropTypes.number,
  handleValue: PropTypes.func,
  handleValidations: PropTypes.func
};
