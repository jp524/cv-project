import React from 'react';
import './styles/App.scss';
import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';
import AppState from './interfaces/AppState';

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      generalObject: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone Number',
        city: 'City, Country',
      },
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

  updateGeneral = (updatedGeneralObject: {
    name: string;
    email: string;
    phone: string;
    city: string;
  }) => {
    this.setState({
      generalObject: updatedGeneralObject,
    });
  };

  updateWork = (updatedWorkObject: {
    id: number;
    companyName: string;
    positionTitle: string;
    fromDate: string;
    untilDate: string;
    tasks: string;
  }) => {
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

  updateEducation = (updatedEducationObject: {
    id: number;
    schoolName: string;
    degree: string;
    date: string;
  }) => {
    const index = this.state.educationObjects.findIndex(
      (obj) => obj.id == updatedEducationObject.id
    );
    const newObjects = this.state.educationObjects;
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
    const { generalObject, workObjects, educationObjects } = this.state;

    return (
      <div className="container">
        <div className="section general">
          <General
            generalObject={generalObject}
            onUpdate={this.updateGeneral}
          />
        </div>
        <div className="section">
          <div className="section--header">
            <h3>Work</h3>
            <button
              onClick={this.addWork}
              className="btn btn--primary btn--small"
            >
              Add Work Experience
            </button>
          </div>
          {workObjects.map((workObject) => (
            <Work
              key={workObject.id}
              workObject={workObject}
              onUpdate={this.updateWork}
              onRemove={this.removeWork}
            />
          ))}
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
          <button
            onClick={this.addEducation}
            className="btn btn--primary btn--small"
          >
            Add Education
          </button>
        </div>
      </div>
    );
  }
}

export default App;
