import React from 'react';
import './App.css';
import Education from './components/Education';
import Work from './components/Work';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="section">
          <h1>Education</h1>
          <Education />
        </div>
        <div className="section">
          <h1>Work</h1>
          <Work />
        </div>
      </div>
    );
  }
}

export default App;
