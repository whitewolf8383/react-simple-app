import React from 'react';
import Counter from './counter';

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 4 },
      { id: 4, value: 6 }
    ]
  };

  handleDelete = (counterId) =>{
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  };

  handleReset = () => {
    const counter = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    this.setState({counters});
  }

  render() { 
    return (
      <div>
        <button 
          onClick={this.handleReset}
          className='btn btn-primary btn-sm m-2'>Reset</button>
        {this.state.counters.map( counter => 
          <Counter 
            key={counter.id} 
            value={counter.value} 
            onDelete={this.handleDelete} 
            id={counter.id}
          />)}
      </div>
    );
  }
}
 
export default Counters;