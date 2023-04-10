import React from 'react';
import GeneralState from '../interfaces/GeneralState';
import GeneralProps from '../interfaces/GeneralProps';

class General extends React.Component<GeneralProps, GeneralState> {
  constructor(props: any) {
    super(props);

    this.state = {
      updating: false,
      name: 'Name',
      email: 'Email',
      phone: 'Phone Number',
      city: 'City, Country',
    };
  }

  applyStateToProps = () => {
    this.setState({
      name: this.props.generalObject.name,
      email: this.props.generalObject.email,
      phone: this.props.generalObject.phone,
      city: this.props.generalObject.city,
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
    } as Pick<GeneralState, keyof GeneralState>);
  };

  onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({
      updating: false,
    });
    const { name, email, phone, city } = this.state;
    const updatedGeneralObject = {
      name,
      email,
      phone,
      city,
    };
    this.props.onUpdate(updatedGeneralObject);
  };

  render() {
    const { updating, name, email, phone, city } = this.state;
    const { generalObject } = this.props;
    const updateView = (
      <form onSubmit={this.onSubmitForm} className="form">
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.onInputChange}
          />
        </label>
        <label htmlFor="city">
          City, Country:
          <input
            type="text"
            name="city"
            value={city}
            onChange={this.onInputChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.onInputChange}
          />
        </label>
        <label htmlFor="phone">
          Phone Number:
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={this.onInputChange}
          />
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
      <div className="general--static">
        <div className="general--static--line">
          <h2>{generalObject.name}</h2>
        </div>
        <div className="general--static--line">
          <p>{generalObject.city}</p>
          <p>{generalObject.email}</p>
          <p>{generalObject.phone}</p>
        </div>
        <div className="general--static--line">
          <button
            type="button"
            onClick={this.updateMode}
            className="btn btn--light btn--small"
          >
            Edit
          </button>
        </div>
      </div>
    );

    return <div>{updating ? updateView : staticView}</div>;
  }
}

export default General;
