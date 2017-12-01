import React, { Component } from 'react';

class CompletedTodos extends Component {
      constructor() {
        super() 
        this.state = {
    }
  }
  render() {
    const showCompleted = this.props.completedTodos.map((todos, i) => {
        return (
          <div key={i} className='eachItem animated fadeIn'>
              <h1>{todos}</h1>
              <hr/>
              <div>
                <button className='delete-completed' >Delete</button>
              </div>
          </div>
        )
    })
    return (
      <div className='parentParent' >
        <div className='parentComplete' >
          <div className='task-box-title' >Finished</div>
          {showCompleted}
        </div>
      </div>
    );
  }
}
export default CompletedTodos;