import React from 'react';

const Notification = (props) => {
    const message = props.message
    if (message === null) {
        return null
    } else {
        return (
            <div className="message">
                {message}
            </div>
        )
    }
}

export default Notification