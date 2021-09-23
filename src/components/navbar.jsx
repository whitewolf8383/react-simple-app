import React from 'react';

class Navbar extends React.Component {
  render() { 
    return (
      <nav className='navbar navbar-light bg-light'>
        <a className='navbar-brand m-2' href='#'>Total Counters: { this.props.totalCounters }</a>
      </nav>
    );
  }
}
 
export default Navbar;