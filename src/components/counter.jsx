import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0
  };

  formatCount() {
    const count = this.state.count;
    return count === 0 ? <h6>Zero</h6> : <h6>{ count }</h6>;
  }

  getClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement = () => {
    const count = this.state.count;
    this.setState({ count: count === 0 ? count : count - 1 });
  }


  render() { 
    const buttonClasses = "btn btn-secondary btn-sm m-2";

    return (
      <div>
        <span className={ this.getClasses() }>{ this.formatCount() }</span>
        <button onClick={ this.handleIncrement } className={ buttonClasses }>Increment</button>
        <button onClick={ this.handleDecrement } className={ buttonClasses }>Decrement</button>
      </div>
    );
  }
}
 
export default Counter;