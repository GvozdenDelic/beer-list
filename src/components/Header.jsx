import PropTypes from "prop-types";
import { useReducer } from "react";
import Validation from "./Validation";
import Logo from "./Logo";
import Button from "./Button";
import logoBig from "/images/beer-list-logo.webp";
import logoSmall from "/images/beer-list-logo--small.webp";
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
      <Logo logoBig={logoBig} logoSmall={logoSmall} />

      <div className="site-header__features">
        {state.loggingIn && (
          <>
            <input
              placeholder="Enter your name..."
              type="text"
              onChange={(e) => handleChangeName(e)}
            />
            <Button onClickFunction={() => handleLogin(state.username)}>Log in</Button>

            {state.validationError !== "" && (
              <Validation type="error" message={state.validationError} />
            )}
          </>
        )}

        {!state.loggingIn && !state.loggedIn && (
          <Button onClickFunction={handleLogging}>Log in</Button>
        )}

        {state.loggedIn && (
          <>
            <span className="username">Hi, {state.username} !</span>
            <span className="favorites__icon">
              🧡({favoriteList ? favoriteList.length : 0})
            </span>
            <Button onClickFunction={handleLogOut}>Log out</Button>
          </>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  favoriteList: PropTypes.array,
};
