import PropTypes from "prop-types";

export default function MaxMinValidationFc(value, from, to) {
  return value <= from ? from : value >= to ? to : value;
}

MaxMinValidationFc.propTypes = {
  value: PropTypes.number,
  from: PropTypes.number,
  to: PropTypes.number
};
