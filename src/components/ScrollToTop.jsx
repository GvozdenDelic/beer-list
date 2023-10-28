import { useEffect } from "react";
import { useLocation } from "react-router";
import PropTypes from "prop-types";

ScrollToTop.propTypes = {
  children: PropTypes.object,
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
