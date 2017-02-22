import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import MemoDoingList from '../Components/MemoDoingList'
import { deleteTodo, changeDoingToDone }from '../actions'

class MemoDoingRoute extends Component{
	constructor(props) {
        super(props);
    }

    render() {
      const { dispatch, todolist} = this.props;

   	  return (   
   	      <MemoDoingList todolist={todolist} 
                       onDel={index => dispatch(deleteTodo(index))} 
                       onDoingToDone={index => dispatch(changeDoingToDone(index))} /> 
   	   )
   }
}

MemoDoingRoute.propTypes = {
  todolist: PropTypes.arrayOf(PropTypes.shape({
                todo: PropTypes.string.isRequired,
                completed: PropTypes.number.isRequired
  }).isRequired).isRequired
}

function mapStateToProps(state){
  return {todolist: state.todolist}
}

export default connect(mapStateToProps)(MemoDoingRoute)