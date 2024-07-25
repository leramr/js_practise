import React, { Component } from 'react';

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
        <button type='button' onClick={this.handleIncrement}>+</button>
        <button type='button' onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
