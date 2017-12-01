import React, { Component } from 'react';

class ListItems extends Component {
      constructor() {
        super()
        this.state = {
        }
      }
  render() {
    const displayList = this.props.todo.map((todos, i)=>{
        return (
          <div key={i} className='eachItem'>
            <h1>{todos}</h1>
            <div>
              <button onClick={()=>{this.props.completeTodo(todos, i)}}>Complete</button>
              <button onClick={()=>{this.props.deleteTodo(todos, i)}}>Delete</button>
            </div>
          </div>
        )
    })
    return (
        <div className='parentParent' >
            <div className='taskParent' >
                {displayList}
            </div>
        </div>
    );
  }
}
export default ListItems;