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
          <div key={i} className='eachItem animated slideInDown'>
            <h1>{todos}</h1>
            <hr/>
            <div>
              <button className='complete-button' onClick={()=>{this.props.completeTodo(todos, i)}}>Complete</button>
              <button className='delete-button-tasks' onClick={()=>{this.props.deleteTodo(todos, i)}}>Delete</button>
            </div>
          </div>
        )
    })
    return (
        <div className='parentParent' >
            <div className='taskParent' >
              <div className='task-box-title' >Task's</div>
                {displayList}
            </div>
        </div>
    );
  }
}
export default ListItems;