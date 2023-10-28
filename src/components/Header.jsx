import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useReducer } from "react";
import "./scss/header.scss";

function Header({ favoriteList }) {
  const initialState = {
    username: "",
    loggingIn: false,
    loggedIn: false,
    validationError: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "change_name": {
        return {
          ...state,
          username: action.payload,
          validationError: "",
        };
      }
      case "logging": {
        return {
          ...state,
          loggingIn: true,
          loggedIn: false,
        };
      }
      case "loggedin": {
        return {
          ...state,
          loggingIn: false,
          loggedIn: true,
        };
      }
      case "validation_error": {
        return {
          ...state,
          validationError: action.payload,
        };
      }
    }
    throw Error("Unknown action: " + action.type);
  }

  function handleLogging() {
    dispatch({ type: "logging" });
  }

  function handleChangeName(e) {
    dispatch({ type: "change_name", payload: e.target.value });
  }

  function handleLogin(username) {
    if (username.length > 2) {
      dispatch({ type: "loggedin", username });
    } else {
      dispatch({
        type: "validation_error",
        payload: "Name must have at least 3 chars",
      });
    }
  }

  return (
    <header className="site-header">
      <h1>
        <Link to={`/`}>🍺 Beer list</Link>
      </h1>

      <div className="site-header__right">
        {state.loggingIn && (
          <>
            <input
              placeholder="Enter your name..."
              type="text"
              onChange={(e) => handleChangeName(e)}
            />
            <button
              className="button"
              onClick={() => handleLogin(state.username)}
            >
              Log in
            </button>

            {state.validationError !== "" && (
              <div className="validation-error">{state.validationError}</div>
            )}
          </>
        )}

        {!state.loggingIn && !state.loggedIn && (
          <button className="button" onClick={handleLogging}>
            Log in
          </button>
        )}

        {state.loggedIn && `Hi, ${state.username} !`}
        {state.loggedIn && (
          <div className="favorites__icon">
            🧡({favoriteList ? favoriteList : 0})
          </div>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  favoriteList: PropTypes.number,
};

export default Header;
