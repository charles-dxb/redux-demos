import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import MemoDoneList from '../Components/MemoDoneList'
import { deleteTodo }from '../actions'

class MemoDoneRoute extends Component{
	constructor(props) {
        super(props);
    }

    render() {
      const { dispatch, todolist} = this.props;

   	  return (   
   	      <MemoDoneList todolist={todolist} 
                       onDel={index => dispatch(deleteTodo(index))}  /> 
   	   )
   }
}

MemoDoneRoute.propTypes = {
  todolist: PropTypes.arrayOf(PropTypes.shape({
                todo: PropTypes.string.isRequired,
                completed: PropTypes.number.isRequired
  }).isRequired).isRequired
}

function mapStateToProps(state){
  return {todolist: state.todolist}
}

export default connect(mapStateToProps)(MemoDoneRoute)