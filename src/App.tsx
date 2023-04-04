import React from 'react';
import './App.css';
import Education from './components/Education';
import Work from './components/Work';
import AppState from './interfaces/AppState';

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      numWork: 1,
    };
  }

  addWork = () => {
    this.setState({
      numWork: this.state.numWork + 1,
    });
  };

  render() {
    const workComponents = [];

    for (let i = 0; i < this.state.numWork; i += 1) {
      workComponents.push(<Work key={i} />);
    }

    return (
      <div className="app">
        <div className="section">
          <h1>Education</h1>
          <Education />
        </div>
        <div className="section">
          <h1>Work</h1>
          {workComponents}
          <button onClick={this.addWork}>Add Work Experience</button>
        </div>
      </div>
    );
  }
}

export default App;
