
import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO} from '../actions/actionTypes'
const intialState=[];

const todoReducer=(state=intialState,action)=>{

	switch(action.type){

		case ADD_TODO:
			return [...state,
				{	id:action.id,
					text:action.text,
					completed:false
				}

					] ;
		case REMOVE_TODO:

			return state.filter(todo=>todo.id!== action.id) ;

		case TOGGLE_TODO:
			return (state.map((todo)=>{
			return (todo.id===action.id)?{...todo,completed:!todo.completed}:todo

		}) 
		) ;


		default:
			return state;
	}


}
export default todoReducer;