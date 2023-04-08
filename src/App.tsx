import React from 'react';
import './App.css';
import Education from './components/Education';
import Work from './components/Work';
import AppState from './interfaces/AppState';

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);

    // App to be refactored to hold Work and Experience related states
    // Known issue: upon clicking "Remove" button for one Work or Experience component all get deleted
    this.state = {
      workIds: [0],
      workCounter: 1,
      educationIds: [0],
      educationCounter: 1,
    };
  }

  addWork = () => {
    this.setState({
      workIds: [...this.state.workIds, this.state.workCounter],
      workCounter: this.state.workCounter + 1,
    });
  };

  removeWork = (id: number) => {
    this.setState({
      workIds: this.state.workIds.filter((workId) => {
        workId !== id;
      }),
    });
  };

  addEducation = () => {
    this.setState({
      educationIds: [...this.state.educationIds, this.state.educationCounter],
      educationCounter: this.state.educationCounter + 1,
    });
  };

  removeEducation = (id: number) => {
    this.setState({
      educationIds: this.state.educationIds.filter((educationId) => {
        educationId !== id;
      }),
    });
  };

  render() {
    const { workIds, educationIds } = this.state;

    return (
      <div className="app">
        <div className="section">
          <h1>Work</h1>
          {workIds.map((workId) => (
            <Work key={workId} id={workId} onRemoveClick={this.removeWork} />
          ))}
          <button onClick={this.addWork}>Add Work Experience</button>
        </div>
        <div className="section">
          <h1>Education</h1>
          {educationIds.map((educationId) => (
            <Education
              key={educationId}
              id={educationId}
              onRemoveClick={this.removeEducation}
            />
          ))}
          <button onClick={this.addEducation}>Add Education</button>
        </div>
      </div>
    );
  }
}

export default App;
