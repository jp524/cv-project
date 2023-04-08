import React from 'react';
import EducationState from '../interfaces/EducationState';
import EducationProps from '../interfaces/EducationProps';

class Education extends React.Component<EducationProps, EducationState> {
  constructor(props: any) {
    super(props);

    this.state = {
      updating: false,
      id: 0,
      schoolName: 'University of Toronto',
      degree: 'Bachelor of Engineering',
      date: '2015-2020',
    };
  }

  applyStateToProps = () => {
    this.setState({
      id: this.props.educationObject.id,
      schoolName: this.props.educationObject.schoolName,
      degree: this.props.educationObject.degree,
      date: this.props.educationObject.date,
    });
  };

  updateMode = () => {
    this.setState({
      updating: true,
    });
    this.applyStateToProps();
  };

  cancelUpdate = () => {
    this.setState({
      updating: false,
    });
    this.applyStateToProps();
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
    const { id, schoolName, degree, date } = this.state;
    const updatedEducationObject = {
      id,
      schoolName,
      degree,
      date,
    };
    this.props.onUpdate(updatedEducationObject);
  };

  render() {
    const { updating, schoolName, degree, date } = this.state;
    const { educationObject } = this.props;
    const updateView = (
      <form onSubmit={this.onSubmitForm}>
        <label htmlFor="schoolName">
          School Name:
          <input
            type="text"
            name="schoolName"
            value={schoolName}
            onChange={this.onInputChange}
          />
        </label>
        <label htmlFor="degree">
          Degree type:
          <input
            type="text"
            name="degree"
            value={degree}
            onChange={this.onInputChange}
          />
        </label>
        <label htmlFor="date">
          Dates:
          <input
            type="text"
            name="date"
            value={date}
            onChange={this.onInputChange}
          />
        </label>

        <div className="form--actions">
          <button type="button" onClick={this.cancelUpdate}>
            Cancel
          </button>
          <input type="submit" value="Update" />
        </div>
      </form>
    );

    const staticView = (
      <div>
        <p>{educationObject.schoolName}</p>
        <p>{educationObject.degree}</p>
        <p>{educationObject.date}</p>
        <button type="button" onClick={this.updateMode}>
          Edit
        </button>
        <button
          type="button"
          onClick={() => this.props.onRemove(educationObject.id)}
        >
          Remove
        </button>
      </div>
    );

    return (
      <div className="education">{updating ? updateView : staticView}</div>
    );
  }
}

export default Education;
