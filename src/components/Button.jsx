import PropTypes from "prop-types";

export default function Button ({children="button", onClickFunction, buttonClass="button"}) {
    return <button
              className={buttonClass}
              onClick={onClickFunction}
            >
                {children}
            </button>
}

Button.propTypes = {
    children: PropTypes.string,
    buttonClass: PropTypes.string,
    onClickFunction: PropTypes.func
}