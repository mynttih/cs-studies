import React from 'react'

class Notification extends React.Component {
  render() {
    const notification = this.props.store.getState().notification
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

export default Notification
