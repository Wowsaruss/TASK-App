import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos/Todos.js';
import ListItems from './components/ListItems/ListItems.js';
import CompletedTodos from './components/CompletedTodos/CompletedTodos.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todo: [],
      completedTodos: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  handleSubmit(e, item) {
    const newTodo = item;
    if(newTodo){
      const newTodoList = [...this.state.todo, newTodo]
      this.setState({
        todo: newTodoList,
      })
    }
  }
  completeTodo(todo, i) {
    let newTodoState = [...this.state.todo];
    const doneTodo = newTodoState.splice(i,1);
    let newCompletedTodoState = [...this.state.completedTodos, doneTodo] 
    this.setState({
      todo: newTodoState,
      completedTodos: newCompletedTodoState
    })
  }
  deleteTodo(todo , i) {
    let newTodoState = [...this.state.todo];
    newTodoState.splice(i,1);
    this.setState({
      todo: newTodoState,
    })
  }
  deleteCompleted(completeTodos, i) {
    let newCompleteState = [...this.state.completedTodos];
    newCompleteState.splice(i, 1);
    this.setState({
      todo: newCompleteState
    })
  }

  render() {
    return (
      <div>
          <div>
            <Todos handleSubmit={this.handleSubmit}/>
            <ListItems todo={this.state.todo} completeTodo={this.completeTodo} deleteTodo={this.deleteTodo}/>
            <CompletedTodos completedTodos={this.state.completedTodos}/>
          </div>
      </div>
    );
  }
}
export default App;