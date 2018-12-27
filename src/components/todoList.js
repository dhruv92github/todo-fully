import React from 'react';
const TodoList=(props)=>{

	 console.log(props.todo)
		return(<div>
			<ul>

				{props.todo.map(todo=> <div key={todo.id} >
					<label className="checkbox" 
					style={{textDecoration:todo.completed ? "line-through":"none"}} >
					<input type="checkbox" onClick={()=>props.toggle(todo.id)} style={{color:"blue"}} />&nbsp;

					{todo.text} {todo.completed ?"(Completed)":""}
					<span className="fas fa-minus-circle" 
					onClick={()=>props.removeToDo(todo.id)} />
					</label></div> )}
			</ul>
			
			</div>)
	}
	
	



export default TodoList;