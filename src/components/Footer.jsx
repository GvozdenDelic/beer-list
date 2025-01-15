import PropTypes from "prop-types";
import "./scss/footer.scss";

export default function Footer({ children }) {
  return (
    <footer>
      <p>{children}</p>
    </footer>
  );
}

Footer.propTypes = {
  children: PropTypes.string
};
