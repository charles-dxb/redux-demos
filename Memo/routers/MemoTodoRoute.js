import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import MemoTodoList from '../Components/MemoTodoList'
import { deleteTodo, changeTodoToDoing }from '../actions'

class MemoTodoRoute extends Component{
	constructor(props) {
        super(props);
    }

    render() {
      const { dispatch, todolist} = this.props;

   	  return (   
   	      <MemoTodoList todolist={todolist} 
                       onDel={index => dispatch(deleteTodo(index))} 
                       onTodoToDoing={index => dispatch(changeTodoToDoing(index))} /> 
   	   )
   }
}

MemoTodoRoute.propTypes = {
  todolist: PropTypes.arrayOf(PropTypes.shape({
                todo: PropTypes.string.isRequired,
                completed: PropTypes.number.isRequired
  }).isRequired).isRequired
}

function mapStateToProps(state){
  return {todolist: state.todolist}
}

export default connect(mapStateToProps)(MemoTodoRoute)