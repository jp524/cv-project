import React from 'react';
import './App.css';
import Education from './components/Education';
import Work from './components/Work';
import AppState from './interfaces/AppState';

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      numEducation: 1,
      numWork: 1,
    };
  }

  addEducation = () => {
    this.setState({
      numEducation: this.state.numEducation + 1,
    });
  };

  addWork = () => {
    this.setState({
      numWork: this.state.numWork + 1,
    });
  };

  render() {
    const educationComponents = [];
    const workComponents = [];

    for (let i = 0; i < this.state.numWork; i += 1) {
      workComponents.push(<Work key={i} />);
    }

    for (let i = 0; i < this.state.numEducation; i += 1) {
      educationComponents.push(<Education key={i} />);
    }

    return (
      <div className="app">
        <div className="section">
          <h1>Education</h1>
          {educationComponents}
          <button onClick={this.addEducation}>
            Add Educational Experience
          </button>
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
