import React from 'react';

class Counter extends React.Component {
  state = {
    value: this.props.value
  };

  formatCount() {
    const count = this.state.value;
    return count === 0 ? <h6>Zero</h6> : <h6>{ count }</h6>;
  }

  getClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.value === 0) ? "warning" : "primary";
    return classes;
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  }

  handleDecrement = () => {
    const value = this.state.value;
    this.setState({ value: value === 0 ? value : value - 1 });
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