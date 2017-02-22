export const ADD_TODO = "ADD_TODO";
export const DEL_TODO = "DEL_TODO";
export const CHANGE_TODO_TO_DOING = "CHANGE_TODO_TO_DOING";
export const CHANGE_DOING_TO_DONE = "CHANGE_DOING_TO_DONE";

export function addTodo(text){
    return {type : ADD_TODO, text}
} 

export function deleteTodo(index){
	return {type : DEL_TODO, index}
}

export function changeTodoToDoing(index){
	return {type : CHANGE_TODO_TO_DOING, index}
}

export function changeDoingToDone(index){
	return {type : CHANGE_DOING_TO_DONE, index}
}
