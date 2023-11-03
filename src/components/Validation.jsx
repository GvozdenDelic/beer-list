import PropTypes from "prop-types";

/* This can be further extended with other types such as success, info, warning... */
export default function Validation({ type, message }) {
  return <div className={`validation-${type}`}>{message}</div>;
}

Validation.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};
