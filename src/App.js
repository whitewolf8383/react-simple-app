import React from 'react';

// Components
import Counter from './components/counter';

class App extends React.Component {
  render() { 
    return (
      <React.Fragment>
        <Counter />
      </React.Fragment>
    );
  }
}
 
export default App;