import React from 'react';
import './App.css';

// atoms
import Button from './components/atoms/Button';

function App() {
  return (
    <div className="App">
      <Button variant="primary">add</Button>
      <div>space</div>
      <Button variant="secondary">add</Button>
    </div>
  );
}

export default App;
