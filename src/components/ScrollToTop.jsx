import { useEffect } from "react";
import { useLocation } from "react-router";
import PropTypes from "prop-types";

ScrollToTop.propTypes = {
  children: PropTypes.object,
};

// This is used to make sure that scroll is set to "0" when opening the detail page
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
