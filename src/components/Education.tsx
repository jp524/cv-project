import React from 'react';
import EducationState from '../interfaces/EducationState';

class Education extends React.Component<{}, EducationState> {
  constructor(props: any) {
    super(props);

    this.state = {
      schoolName: 'University of Toronto',
      degree: 'Bachelor of Engineering',
      date: '2015-2020',
    };
  }

  render() {
    const { schoolName, degree, date } = this.state;

    return (
      <div className="education">
        <h1>Education</h1>
        <p>{schoolName}</p>
        <p>{degree}</p>
        <p>{date}</p>
      </div>
    );
  }
}

export default Education;
