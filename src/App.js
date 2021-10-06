import React from 'react';

// Components
import Counters from './components/counters';

class App extends React.Component {
  render() { 
    return (
      <React.Fragment>
        <Counters />
      </React.Fragment>
    );
  }
}
 
export default App;