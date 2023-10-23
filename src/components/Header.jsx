import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header({ favoriteList }) {
  return (
    <header className="site-header">
      <h1>
        {" "}
        <Link to={`/`}>🍺 Beer list</Link>
      </h1>

      {favoriteList && (
        <div className="favorites__icon">🧡({favoriteList.length})</div>
      )}
    </header>
  );
}

Header.propTypes = {
  favoriteList: PropTypes.array,
};

export default Header;
