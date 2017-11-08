import React, { Component } from 'react';
import './completedtodos.css'

class CompletedTodos extends Component {
      constructor() {
        super() 
        this.state = {
    }
  }
  render() {
    const showCompleted = this.props.completedTodos.map((todos, i) => {
        return (
          <div key={i} className='eachItem'>
              <h1>{todos}</h1>
              <div>
                <button>Delete</button>
                <button disabled >Complete</button>
            </div>
          </div>
        )
    })
    return (
      <div className='parentParent' >
        <div className='parentComplete' >
          {showCompleted}
        </div>
      </div>
    );
  }
}
export default CompletedTodos;