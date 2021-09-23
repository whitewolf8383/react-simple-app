import React, { Component } from 'react';

class Counter extends React.Component {
  state = {
    value: this.props.value
  };

  styles = {
    button: {
      fontWeight: 30,
      fontWeight: 'bold',
      marginLeft: 5,
      padding: 5,
      width: 50
    }
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  }

  handleDecrement = () => {
    this.state.value === 0 ? 
    this.setState({ value: this.state.value = 0 }) : 
    this.setState({ value: this.state.value - 1 }); 
  }
  
  render() { 
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{ this.getCount() }</span>
        <button style={ this.styles.button } onClick={ this.handleIncrement }>+</button>
        <button style={ this.styles.button } onClick={ this.handleDecrement }>-</button>
      </React.Fragment>
    );
  }

  getCount() {
    return (this.state.value === 0 ? 'Zero' : this.state.value);
  }

  getBadgeClasses() {
    let spanClasses = 'badge m-2 badge-';
    spanClasses += this.state.value === 0 ? 'warning' : 'primary';
    return spanClasses;
  }
}
 
export default Counter;