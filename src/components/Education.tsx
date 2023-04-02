import React from 'react';
import EducationState from '../interfaces/EducationState';

// interface State {
//   schoolName: string;
//   degree: string;
//   date: string;
// }

class Education extends React.Component<{}, EducationState> {
  constructor(props: any) {
    super(props);

    this.state = {
      updating: false,
      schoolName: 'University of Toronto',
      degree: 'Bachelor of Engineering',
      date: '2015-2020',
      educationState: { schoolName: '', degree: '', date: '' },
    };
  }

  updateMode = () => {
    this.setState((prevState: any) => ({
      updating: true,
      educationState: {
        ...prevState.educationState,
        schoolName: this.state.schoolName,
        degree: this.state.degree,
        date: this.state.date,
      },
    }));
  };

  cancelUpdate = () => {
    this.setState({
      updating: false,
      schoolName: this.state.educationState.schoolName,
      degree: this.state.educationState.degree,
      date: this.state.educationState.date,
    });
    this.resetPrevState;
  };

  resetPrevState = () => {
    this.setState((prevState: any) => ({
      educationState: {
        ...prevState.educationState,
        schoolName: '',
        degree: '',
        date: '',
      },
    }));
  };

  onInputChange = (e: { target: { name: any; value: any } }) => {
    this.setState({
      [e.target.name]: e.target.value,
    } as Pick<EducationState, keyof EducationState>);
  };

  onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({
      updating: false,
    });
    this.resetPrevState;
  };

  render() {
    const { updating, schoolName, degree, date } = this.state;
    const updateView = (
      <form onSubmit={this.onSubmitForm}>
        <input
          type="text"
          name="schoolName"
          value={schoolName}
          onChange={this.onInputChange}
        />
        <input
          type="text"
          name="degree"
          value={degree}
          onChange={this.onInputChange}
        />
        <input
          type="text"
          name="date"
          value={date}
          onChange={this.onInputChange}
        />

        <button type="button" onClick={this.cancelUpdate}>
          Cancel
        </button>
        <input type="submit" value="Update" />
      </form>
    );

    const staticView = (
      <div>
        <p>{schoolName}</p>
        <p>{degree}</p>
        <p>{date}</p>
        <button type="button" onClick={this.updateMode}>
          Edit
        </button>
      </div>
    );

    return (
      <div className="education">
        <h1>Education</h1>
        {updating ? updateView : staticView}
      </div>
    );
  }
}

export default Education;
