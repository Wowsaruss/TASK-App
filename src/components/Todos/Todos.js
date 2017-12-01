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
                    <div className="title animated fadeInDownBig">TASK</div>
                    <div className='formWrap' >
                    <div>
                        <input className="inputBox animated fadeInDown" onChange={(e)=> {this.setState({ userInput: e.target.value })}} placeholder='Add new TASK' value={this.state.userInput}/>
                    </div>
                    <button className='submitBtn animated flipInX' onClick={e=>{this.props.handleSubmit(e, this.state.userInput); this.setState({userInput: ''})}}>Add</button>
                    </div>
            </div>
        </div>
    );
  }
}
export default Todos;