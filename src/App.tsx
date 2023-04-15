import React, { useState } from 'react';
import './styles/App.scss';
import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';

const App = () => {
  const [generalObject, setGeneralObject] = useState({
    name: 'Name',
    email: 'Email',
    phone: 'Phone Number',
    city: 'City, Country',
  });
  const [workCounter, setWorkCounter] = useState(1);
  const [workObjects, setWorkObjects] = useState([
    {
      id: 0,
      companyName: 'Company Name',
      positionTitle: 'Position Title',
      fromDate: 'Month Year',
      untilDate: 'Month Year',
      tasks: 'Tasks',
    },
  ]);
  const [educationCounter, setEducationCounter] = useState(1);
  const [educationObjects, setEducationObjects] = useState([
    {
      id: 0,
      schoolName: 'School Name',
      degree: 'Degree',
      date: 'Attendance Dates',
    },
  ]);

  const updateGeneral = (updatedGeneralObject: {
    name: string;
    email: string;
    phone: string;
    city: string;
  }) => {
    setGeneralObject(updatedGeneralObject);
  };

  const updateWork = (updatedWorkObject: {
    id: number;
    companyName: string;
    positionTitle: string;
    fromDate: string;
    untilDate: string;
    tasks: string;
  }) => {
    const index = workObjects.findIndex(
      (obj) => obj.id == updatedWorkObject.id
    );
    const newObjects = workObjects;
    newObjects[index] = updatedWorkObject;
    setWorkObjects(newObjects);
  };

  const addWork = () => {
    setWorkObjects((prevState) => [
      ...prevState,
      {
        id: workCounter,
        companyName: 'Company Name',
        positionTitle: 'Position Title',
        fromDate: 'Month Year',
        untilDate: 'Month Year',
        tasks: 'Tasks',
      },
    ]);
    setWorkCounter(workCounter + 1);
  };

  const removeWork = (id: number) => {
    setWorkObjects(workObjects.filter((obj) => obj.id !== id));
  };

  const updateEducation = (updatedEducationObject: {
    id: number;
    schoolName: string;
    degree: string;
    date: string;
  }) => {
    const index = educationObjects.findIndex(
      (obj) => obj.id == updatedEducationObject.id
    );
    const newObjects = educationObjects;
    newObjects[index] = updatedEducationObject;
    setEducationObjects(newObjects);
  };

  const addEducation = () => {
    setEducationObjects((prevState) => [
      ...prevState,
      {
        id: educationCounter,
        schoolName: 'School Name',
        degree: 'Degree',
        date: 'Attendance Dates',
      },
    ]);
    setEducationCounter(educationCounter + 1);
  };

  const removeEducation = (id: number) => {
    setEducationObjects(educationObjects.filter((obj) => obj.id !== id));
  };

  return (
    <div className="container">
      <div className="section general">
        <General generalObject={generalObject} onUpdate={updateGeneral} />
      </div>
      <div className="section">
        <div className="section--header">
          <h3>Work</h3>
          <button onClick={addWork} className="btn btn--primary btn--small">
            Add Work Experience
          </button>
        </div>
        {workObjects.map((workObject) => (
          <Work
            key={workObject.id}
            workObject={workObject}
            onUpdate={updateWork}
            onRemove={removeWork}
          />
        ))}
      </div>
      <div className="section">
        <div className="section--header">
          <h3>Education</h3>
          <button
            onClick={addEducation}
            className="btn btn--primary btn--small"
          >
            Add Education
          </button>
        </div>
        {educationObjects.map((educationObject) => (
          <Education
            key={educationObject.id}
            educationObject={educationObject}
            onUpdate={updateEducation}
            onRemove={removeEducation}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
