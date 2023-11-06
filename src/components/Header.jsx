import PropTypes from "prop-types";
import { useReducer } from "react";
import Validation from "./Validation";
import Logo from "/images/beer-list-logo.webp";
import LogoSmall from "/images/beer-list-logo--small.webp";
import "./scss/header.scss";

export default function Header({ favoriteList }) {
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
      case "logout": {
        return {
          ...state,
          username: "",
          loggedIn: false,
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

  function handleLogOut() {
    dispatch({ type: "logout" });
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
      <img className="logo logo--big" src={Logo} alt="Beer List logo" />
      <img className="logo logo--small" src={LogoSmall} alt="Beer List logo" />

      <div className="site-header__features">
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
              <Validation type="error" message={state.validationError} />
            )}
          </>
        )}

        {!state.loggingIn && !state.loggedIn && (
          <button className="button" onClick={handleLogging}>
            Log in
          </button>
        )}

        {state.loggedIn && (
          <span className="username">Hi, {state.username} !</span>
        )}
        {state.loggedIn && (
          <>
            <span className="favorites__icon">
              🧡({favoriteList ? favoriteList.length : 0})
            </span>
            <button className="button" onClick={handleLogOut}>
              Log out
            </button>
          </>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  favoriteList: PropTypes.array,
};
