import React from 'react';
import './App.css';
import DisplaySome from './components/DisplaySome';

function App() {
  return (
    <div className="App">
      <DisplaySome strikes={5} balls={0} />
    </div>
  );
}

export default App;
