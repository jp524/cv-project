import React, { useState } from 'react';
import EducationProps from '../interfaces/EducationProps';

const Education = (props: EducationProps): JSX.Element => {
  const [updating, setUpdating] = useState(false);
  const [educationObject, setEducationObject] = useState({
    id: 0,
    schoolName: 'School Name',
    degree: 'Degree',
    date: 'Attendance Dates',
  });

  const applyStateToProps = () => {
    setEducationObject(props.educationObject);
  };

  const updateMode = () => {
    setUpdating(true);
    applyStateToProps();
  };

  const cancelUpdate = () => {
    setUpdating(false);
    applyStateToProps();
  };

  const onInputChange = (e: { target: { name: any; value: any } }) => {
    let { name, value } = e.target;
    setEducationObject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setUpdating(false);
    props.onUpdate(educationObject);
  };

  const updateView = (
    <form onSubmit={onSubmitForm} className="form">
      <label htmlFor="schoolName">
        School Name:
        <input
          type="text"
          name="schoolName"
          value={educationObject.schoolName}
          onChange={onInputChange}
        />
      </label>
      <label htmlFor="degree">
        Degree type:
        <input
          type="text"
          name="degree"
          value={educationObject.degree}
          onChange={onInputChange}
        />
      </label>
      <label htmlFor="date">
        Dates:
        <input
          type="text"
          name="date"
          value={educationObject.date}
          onChange={onInputChange}
        />
      </label>

      <div className="form--actions">
        <button
          type="button"
          onClick={cancelUpdate}
          className="btn btn--light btn--small"
        >
          Cancel
        </button>
        <input
          type="submit"
          value="Update"
          className="btn btn--secondary btn--small"
        />
      </div>
    </form>
  );

  const staticView = (
    <div className="education--static">
      <div className="education--static--line">
        <p>{props.educationObject.schoolName}</p>
      </div>
      <div className="education--static--line">
        <p>{props.educationObject.degree}</p>
      </div>
      <div className="education--static--line">
        <p>{props.educationObject.date}</p>
      </div>
      <div className="education--static--line">
        <button
          type="button"
          onClick={updateMode}
          className="btn btn--light btn--small"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => props.onRemove(educationObject.id)}
          className="btn btn--light btn--small"
        >
          Remove
        </button>
      </div>
    </div>
  );

  return <div className="education">{updating ? updateView : staticView}</div>;
};

export default Education;
