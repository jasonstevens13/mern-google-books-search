import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ViewBtn(props) {
    return (
        <button type="button" role="button" className="btn btn-primary" {...props} tabIndex="0">
            View
        </button>
    );
}

export default ViewBtn;
