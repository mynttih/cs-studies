import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'

class Notification extends React.Component {
  render() {
    const notification = this.props.notification
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    if (notification !== null) {
      return (
        <div style={style}>
          { notification }
        </div>
      )
    }
    return null
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(
  mapStateToProps
) (Notification)

export default ConnectedNotification

Notification.contextTypes = {
  store: PropTypes.object
}

Notification.propTypes = {
  notification: PropTypes.string
}