import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions'
import AddTodo from '../components/AddTodo'
import Navigation from '../components/Navigation'
import './App.less';

class App extends Component {
  render() {
    let allNum = 0,
        todoNum = 0,
        doingNum = 0,
        doneNum = 0;
    const { dispatch, todolist } = this.props
    todolist.map( (item) => {
        if(item.completed == 0){
            todoNum++;
        }else if(item.completed == 1){
            doingNum++;
        }else{
            doneNum++;
        }
        allNum++;
    })

    return (
      <div>
        <AddTodo
          onAddClick={text =>
            dispatch(addTodo(text))
          } />
        <Navigation allNum={allNum} todoNum={todoNum} 
          doingNum={doingNum} doneNum={doneNum}/>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  todolist: PropTypes.arrayOf(PropTypes.shape({
    todo: PropTypes.string.isRequired,
    completed: PropTypes.number.isRequired
  }).isRequired).isRequired
}

function mapStateToProps(state) {
  return {
    todolist: state.todolist
  }
}

export default connect(mapStateToProps)(App)