import React, { Component } from 'react';

class Todos extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
        }
    }
  render() {
    return (
      
        <div>
            <div className="inputParent">
                    <div className="title">TASK</div>
                    <div className='formWrap' >
                    <div>
                        <input className="inputBox" onChange={(e)=> {this.setState({ userInput: e.target.value })}} placeholder='Add new task' value={this.state.userInput}/>
                    </div>
                    <button className='submitBtn' onClick={e=>{this.props.handleSubmit(e, this.state.userInput); this.setState({userInput: ''})}}>Add</button>
                    </div>
            </div>
        </div>
    );
  }
}
export default Todos;