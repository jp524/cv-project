import React from 'react';
import WorkState from '../interfaces/WorkState';
import WorkProps from '../interfaces/WorkProps';

class Work extends React.Component<WorkProps, WorkState> {
  constructor(props: any) {
    super(props);

    this.state = {
      updating: false,
      id: 0,
      companyName: '',
      positionTitle: '',
      fromDate: '',
      untilDate: '',
      tasks: '',
    };
  }

  applyStateToProps = () => {
    this.setState({
      id: this.props.workObject.id,
      companyName: this.props.workObject.companyName,
      positionTitle: this.props.workObject.positionTitle,
      fromDate: this.props.workObject.fromDate,
      untilDate: this.props.workObject.untilDate,
      tasks: this.props.workObject.tasks,
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
    } as Pick<WorkState, keyof WorkState>);
  };

  onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({
      updating: false,
    });
    const { id, companyName, positionTitle, fromDate, untilDate, tasks } =
      this.state;
    const updatedWorkObject = {
      id,
      companyName,
      positionTitle,
      fromDate,
      untilDate,
      tasks,
    };
    this.props.onUpdate(updatedWorkObject);
  };

  render() {
    const { updating, companyName, positionTitle, fromDate, untilDate, tasks } =
      this.state;
    const { workObject } = this.props;
    const updateView = (
      <form onSubmit={this.onSubmitForm} className="form">
        <label htmlFor="companyName">
          Company Name:
          <input
            type="text"
            name="companyName"
            value={companyName}
            onChange={this.onInputChange}
          />
        </label>
        <label htmlFor="positionTitle">
          Position Title:
          <input
            type="text"
            name="positionTitle"
            value={positionTitle}
            onChange={this.onInputChange}
          />
        </label>
        <label htmlFor="fromDate">
          From:
          <input
            type="text"
            name="fromDate"
            value={fromDate}
            onChange={this.onInputChange}
          />
        </label>

        <label htmlFor="untilDate">
          Until:
          <input
            type="text"
            name="untilDate"
            value={untilDate}
            onChange={this.onInputChange}
          />
        </label>

        <label htmlFor="tasks">
          Tasks:
          <textarea name="tasks" value={tasks} onChange={this.onInputChange} />
        </label>

        <div className="form--actions">
          <button
            type="button"
            onClick={this.cancelUpdate}
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
            onClick={this.updateMode}
            className="btn btn--light btn--small"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => this.props.onRemove(workObject.id)}
            className="btn btn--light btn--small"
          >
            Remove
          </button>
        </div>
      </div>
    );

    return <div className="work">{updating ? updateView : staticView}</div>;
  }
}

export default Work;
