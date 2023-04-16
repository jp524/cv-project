import React, { useState } from 'react';
import WorkProps from '../interfaces/WorkProps';

const Work = (props: WorkProps): JSX.Element => {
  const [updating, setUpdating] = useState(false);
  const [workObject, setWorkObject] = useState({
    id: 0,
    companyName: 'Company Name',
    positionTitle: 'Position Title',
    fromDate: 'Month Year',
    untilDate: 'Month Year',
    tasks: 'Tasks',
  });

  const applyStateToProps = () => {
    setWorkObject(props.workObject);
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
    setWorkObject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setUpdating(false);
    props.onUpdate(workObject);
  };

  const updateView = (
    <form onSubmit={onSubmitForm} className="form">
      <label htmlFor="companyName">
        Company Name:
        <input
          type="text"
          name="companyName"
          value={workObject.companyName}
          onChange={onInputChange}
        />
      </label>
      <label htmlFor="positionTitle">
        Position Title:
        <input
          type="text"
          name="positionTitle"
          value={workObject.positionTitle}
          onChange={onInputChange}
        />
      </label>
      <label htmlFor="fromDate">
        From:
        <input
          type="text"
          name="fromDate"
          value={workObject.fromDate}
          onChange={onInputChange}
        />
      </label>

      <label htmlFor="untilDate">
        Until:
        <input
          type="text"
          name="untilDate"
          value={workObject.untilDate}
          onChange={onInputChange}
        />
      </label>

      <label htmlFor="tasks">
        Tasks:
        <textarea
          name="tasks"
          value={workObject.tasks}
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
    <div className="work--static">
      <div className="work--static--line work--static--bold">
        <p>{workObject.companyName}</p>
      </div>
      <div className="work--static--line work--static--bold">
        <p>{workObject.positionTitle}</p>
        <p>
          {workObject.fromDate} - {workObject.untilDate}
        </p>
      </div>
      <div className="work--static--line">
        <p className="textarea">{workObject.tasks}</p>
      </div>
      <div className="work--static--line">
        <button
          type="button"
          onClick={updateMode}
          className="btn btn--light btn--small"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => props.onRemove(workObject.id)}
          className="btn btn--light btn--small"
        >
          Remove
        </button>
      </div>
    </div>
  );

  return <div className="work">{updating ? updateView : staticView}</div>;
};

export default Work;
