import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import TodoReducer from './reducers/todoReducer';
import TodoApp from './containers/todoApp';




const rootReducer=combineReducers({TodoReducer});
const store=createStore(rootReducer);



ReactDOM.render(<Provider store={store}>
					<TodoApp /> 
				</Provider>, document.getElementById('root'));
