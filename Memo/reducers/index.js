import { combineReducers } from 'redux'
import { ADD_TODO,DEL_TODO, CHANGE_TODO_TO_DOING, CHANGE_DOING_TO_DONE } from '../actions'

function todolist(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          todo: action.text,
          completed: 0
        }
      ]
    case DEL_TODO:
      return [
         ...state.slice(0, action.index),
         ...state.slice(action.index + 1)   
      ]
    case CHANGE_TODO_TO_DOING:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: 1
        }),
        ...state.slice(action.index + 1)
      ]
    case CHANGE_DOING_TO_DONE:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: 2
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

const todoApp = combineReducers({
  todolist
})

export default todoApp