import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO} from '../actions/actionTypes';
let nextToDoId=0;

export const addToDo=(text)=>{

	return {type:ADD_TODO,
			id:nextToDoId++,
			text}

}
export const toggleToDo=id=>{
	return {type:TOGGLE_TODO,
			id:id}
}
export const removeToDo=id=>{
	return {type:REMOVE_TODO,
			id:id}
}
