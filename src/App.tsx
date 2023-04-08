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
      workCounter: 1,
      workObjects: [
        {
          id: 0,
          companyName: 'Company Name',
          positionTitle: 'Position Title',
          fromDate: 'Month Year',
          untilDate: 'Month Year',
          tasks: 'Tasks',
        },
      ],
      educationIds: [0],
      educationCounter: 1,
    };
  }

  updateWork = (updatedWorkObject: any) => {
    const index = this.state.workObjects.findIndex(
      (obj) => obj.id == updatedWorkObject.id
    );
    const newWorkObjects = this.state.workObjects;
    newWorkObjects[index] = updatedWorkObject;
    this.setState({
      workObjects: newWorkObjects,
    });
  };

  addWork = () => {
    this.setState({
      workObjects: [
        ...this.state.workObjects,
        {
          id: this.state.workCounter,
          companyName: 'Company Name',
          positionTitle: 'Position Title',
          fromDate: 'Month Year',
          untilDate: 'Month Year',
          tasks: 'Tasks',
        },
      ],
      workCounter: this.state.workCounter + 1,
    });
  };

  removeWork = (id: number) => {
    this.setState({
      workObjects: this.state.workObjects.filter(
        (workObject) => workObject.id !== id
      ),
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
    const { workObjects, educationIds } = this.state;

    return (
      <div className="app">
        <div className="section">
          <h1>Work</h1>
          {workObjects.map((workObject) => (
            <Work
              key={workObject.id}
              workObject={workObject}
              onUpdate={this.updateWork}
              onRemove={this.removeWork}
            />
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
