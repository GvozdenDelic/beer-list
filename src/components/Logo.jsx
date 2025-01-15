import PropTypes from "prop-types";

export default function Logo ({logoBig, logoSmall}) {
    return <>
        <img className="logo logo--big" src={logoBig} alt="Beer List logo" />
        <img className="logo logo--small" src={logoSmall} alt="Beer List logo" />
    </>
}

Logo.propTypes = {
    logoBig: PropTypes.string,
    logoSmall: PropTypes.string
}