import React, { Component } from 'react';
import Value from './value'

class Counter extends Component {
  state = {
    value: 5
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1
    }));
  };

  render() {
    return (
      <div>
        <p>{this.state.value}</p>
            <Value 
            onIncrem = {this.handleIncrement}
            onDecrem = {this.handleDecrement}/>
      </div>
    );
  }
}

export default Counter;
