import React from 'react';
import WorkState from '../interfaces/WorkState';
import WorkProps from '../interfaces/WorkProps';

class Work extends React.Component<WorkProps, WorkState> {
  constructor(props: any) {
    super(props);

    this.state = {
      updating: false,
      companyName: 'Google',
      positionTitle: 'Software Developer',
      fromDate: 'Dec 2020',
      untilDate: 'Mar 2022',
      tasks: 'A paragraph',
      workState: {
        companyName: '',
        positionTitle: '',
        fromDate: '',
        untilDate: '',
        tasks: '',
      },
    };
  }

  updateMode = () => {
    this.setState((prevState: any) => ({
      updating: true,
      workState: {
        ...prevState.workState,
        companyName: this.state.companyName,
        positionTitle: this.state.positionTitle,
        fromDate: this.state.fromDate,
        untilDate: this.state.untilDate,
        tasks: this.state.tasks,
      },
    }));
  };

  cancelUpfromDate = () => {
    this.setState({
      updating: false,
      companyName: this.state.workState.companyName,
      positionTitle: this.state.workState.positionTitle,
      fromDate: this.state.workState.fromDate,
      untilDate: this.state.workState.untilDate,
      tasks: this.state.workState.tasks,
    });
    this.resetPrevState;
  };

  resetPrevState = () => {
    this.setState((prevState: any) => ({
      workState: {
        ...prevState.workState,
        companyName: '',
        positionTitle: '',
        fromDate: '',
        untilDate: '',
        tasks: '',
      },
    }));
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
    this.resetPrevState;
  };

  render() {
    const { updating, companyName, positionTitle, fromDate, untilDate, tasks } =
      this.state;
    const updateView = (
      <form onSubmit={this.onSubmitForm}>
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
          Taks:
          <textarea name="tasks" value={tasks} onChange={this.onInputChange} />
        </label>

        <div className="form--actions">
          <button type="button" onClick={this.cancelUpfromDate}>
            Cancel
          </button>
          <input type="submit" value="Update" />
        </div>
      </form>
    );

    const staticView = (
      <div>
        <p>{companyName}</p>
        <p>{positionTitle}</p>
        <p>{fromDate}</p>
        <p>{untilDate}</p>
        <p className="textarea">{tasks}</p>
        <button type="button" onClick={this.updateMode}>
          Edit
        </button>
        <button
          type="button"
          onClick={() => this.props.onRemoveClick(this.props.id)}
        >
          Remove
        </button>
      </div>
    );

    return <div className="work">{updating ? updateView : staticView}</div>;
  }
}

export default Work;
