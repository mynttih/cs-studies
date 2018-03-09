import { onChange } from '../reducers/filterReducer'
import React from 'react'

class Filter extends React.Component {
   handleChange = (event) => {
     const filter = event.target.value
     this.props.store.dispatch(onChange(filter))
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

export default Filter