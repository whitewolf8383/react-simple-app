import React, { Component } from 'react';

class Counter extends React.Component {
  styles = {
    button: {
      fontWeight: 30,
      fontWeight: 'bold',
      marginLeft: 5,
      padding: 5,
      width: 50
    }
  }
  
  render() { 
    return (
      <div>
        <span className={this.getBadgeClasses()}>{ this.getCount() }</span>
        <button 
          style={ this.styles.button } 
          onClick={ () => { this.props.onIncrement(this.props.counter) }}
        >+</button>

        <button 
          style={ this.styles.button } 
          onClick={ () => { this.props.onDecrement(this.props.counter) } }
        >-</button>

        <button onClick={ () => 
          this.props.onDelete(this.props.counter.id) } 
          className='btn btn-danger btn-sm m-2'
        >Delete</button>
      </div>
    );
  }

  getCount() {
    const { value } = this.props.counter;
    return (value === 0 ? 'Zero' : value);
  }

  getBadgeClasses() {
    let spanClasses = 'badge m-2 badge-';
    spanClasses += this.props.counter.value === 0 ? 'warning' : 'primary';
    return spanClasses;
  }
}
 
export default Counter;