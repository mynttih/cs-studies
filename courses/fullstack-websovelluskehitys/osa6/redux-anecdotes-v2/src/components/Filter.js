import { connect } from 'react-redux'
import { onChange } from '../reducers/filterReducer'
import PropTypes from 'prop-types'
import React from 'react'

class Filter extends React.Component {
   handleChange = (event) => {
     const filter = event.target.value
     this.props.onChange(filter)
   }
   render() {
     const style = {
       marginBottom: 10
     }

     return (
       <div style={style}>
            filter <input onChange={this.handleChange}/>
       </div>
     )
   }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = {
  onChange
}

const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps
) (Filter)

export default ConnectedFilter

Filter.contextTypes = {
  store: PropTypes.object
}

Filter.propTypes = {
  onChange: PropTypes.func
}