import React,{Component} from 'react';


class AddTodo extends Component{

handleSubmit=(e)=>{
	e.preventDefault();
	let text=this.input.value;
	console.log(text)
	this.props.add(text);
	this.input.value='';

}

render(){

		return(<div>
				<form className="form-inline" onSubmit={this.handleSubmit}>
					<input className="form-control mr-sm-2" type="text" placeholder="enter new todo" ref={(node)=>this.input=node} />
					<button className="btn btn-outline-primary" onClick={this.handleSubmit} >Add</button>
				</form>
			</div>)
	}

}

export default AddTodo;