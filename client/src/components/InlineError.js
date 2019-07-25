import React from "react";
import PropTypes from "prop-types";

const InlineError = props => {

    return (
        <div className="alertError">            
            {props.message}
        </div>
    )
}

InlineError.propTypes = {
    message: PropTypes.string.isRequired
}

export default InlineError;