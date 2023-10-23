import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ favoriteList, loggedIn, setLoggedIn }) {
  const [loggingIn, setLoggingIn] = useState(false);
  const [username, setUsername] = useState("");
  const [validationError, setValidationError] = useState("");

  function handleUsername(e) {
    setValidationError("");
    setUsername(e);
  }

  function handleLogin() {
    if (username.length > 2) {
      setLoggedIn(true);
      setLoggingIn(false);
    } else {
      setValidationError("Username must be at least 3 characters long");
    }
  }

  return (
    <header className="site-header">
      <h1>
        <Link to={`/`}>🍺 Beer list</Link>
      </h1>

      <div className="site-header__right">
        {loggingIn && (
          <>
            <input
              placeholder="Enter your name..."
              type="text"
              onChange={(e) => handleUsername(e.target.value)}
            />
            <button className="button" onClick={() => handleLogin()}>
              Log in
            </button>

            {validationError !== "" && (
              <div className="validation-error">{validationError}</div>
            )}
          </>
        )}

        {!loggingIn && !loggedIn && (
          <button className="button" onClick={() => setLoggingIn(true)}>
            Log in
          </button>
        )}

        {loggedIn && `Hi, ${username} !`}
        {loggedIn && (
          <div className="favorites__icon">🧡({favoriteList.length})</div>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  favoriteList: PropTypes.array,
  loggedIn: PropTypes.bool,
  setLoggedIn: PropTypes.func,
};

export default Header;
