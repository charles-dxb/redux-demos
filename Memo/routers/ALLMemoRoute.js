import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import MemoTodoList from '../Components/MemoTodoList'
import MemoDoingList from '../Components/MemoDoingList'
import MemoDoneList from '../Components/MemoDoneList'
import { deleteTodo, changeTodoToDoing, changeDoingToDone }from '../actions'

class AllMemosRoute extends Component{
	constructor(props){
		super(props);
	}

    render() {
      const {dispatch, todolist} = this.props;
   	  return (
          <div>
             <MemoTodoList todolist={todolist} 
                       onDel={index => dispatch(deleteTodo(index))} 
                       onTodoToDoing={index => dispatch(changeTodoToDoing(index))} />
             <MemoDoingList todolist={todolist} 
                       onDel={index => dispatch(deleteTodo(index))} 
                       onDoingToDone={index => dispatch(changeDoingToDone(index))} />
             <MemoDoneList todolist={todolist} 
                       onDel={index => dispatch(deleteTodo(index))}  />
          </div>           
   	   )
   }
}

AllMemosRoute.propTypes = {
	todolist: PropTypes.arrayOf(PropTypes.shape({
                todo: PropTypes.string.isRequired,
                completed: PropTypes.number.isRequired
	}).isRequired).isRequired
}

function mapStateToProps(state){
	return {todolist: state.todolist}
}

export default connect(mapStateToProps)(AllMemosRoute)