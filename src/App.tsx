import React from 'react';
import './App.css';
import Education from './components/Education';
import Work from './components/Work';
import AppState from './interfaces/AppState';

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);

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
      educationCounter: 1,
      educationObjects: [
        {
          id: 0,
          schoolName: 'School Name',
          degree: 'Degree',
          date: 'Attendance Dates',
        },
      ],
    };
  }

  updateWork = (updatedWorkObject: any) => {
    const index = this.state.workObjects.findIndex(
      (obj) => obj.id == updatedWorkObject.id
    );
    const newObjects = this.state.workObjects;
    newObjects[index] = updatedWorkObject;
    this.setState({
      workObjects: newObjects,
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

  updateEducation = (updatedEducationObject: any) => {
    const index = this.state.educationObjects.findIndex(
      (obj) => obj.id == updatedEducationObject.id
    );
    const newObjects = this.state.workObjects;
    newObjects[index] = updatedEducationObject;
    this.setState({
      educationObjects: newObjects,
    });
  };

  addEducation = () => {
    this.setState({
      educationObjects: [
        ...this.state.educationObjects,
        {
          id: this.state.educationCounter,
          schoolName: 'School Name',
          degree: 'Degree',
          date: 'Attendance Dates',
        },
      ],
      educationCounter: this.state.educationCounter + 1,
    });
  };

  removeEducation = (id: number) => {
    this.setState({
      educationObjects: this.state.educationObjects.filter(
        (educationObject) => educationObject.id !== id
      ),
    });
  };

  render() {
    const { workObjects, educationObjects } = this.state;

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
          {educationObjects.map((educationObject) => (
            <Education
              key={educationObject.id}
              educationObject={educationObject}
              onUpdate={this.updateEducation}
              onRemove={this.removeEducation}
            />
          ))}
          <button onClick={this.addEducation}>Add Education</button>
        </div>
      </div>
    );
  }
}

export default App;
