import PropTypes from "prop-types";

export default function ContentWrapper({ children }) {
  return <section className="beer-list">{children}</section>;
}

ContentWrapper.propTypes = {
  children: PropTypes.any,
};
