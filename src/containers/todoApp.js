import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AddTodo from '../components/addTodo';
import TodoList from '../components/todoList';
import {addToDo,toggleToDo,removeToDo} from '../actions/actionCreator';


class TodoApp extends Component{
	render(){


		return(
			<div class="container">
			<h3>To Do App</h3>
			<AddTodo todo={this.props.todo} add={this.props.add} />
			<TodoList todo={this.props.todo} toggle={this.props.toggle} removeToDo={this.props.removeToDo} />
			</div>
			)
	}

}

const mapStateToProps=(state)=>{
	return	{
		todo:state.TodoReducer
	}
}
const mapDispatchToProps=(dispatch)=>{
	
	return ({
		add:bindActionCreators(addToDo,dispatch),
		toggle:bindActionCreators(toggleToDo,dispatch),
		removeToDo:bindActionCreators(removeToDo,dispatch)
	})
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoApp);