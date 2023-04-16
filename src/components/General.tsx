import React, { useState } from 'react';
import GeneralProps from '../interfaces/GeneralProps';

const General = (props: GeneralProps): JSX.Element => {
  const [updating, setUpdating] = useState(false);
  const [generalObject, setGeneralObject] = useState({
    name: 'Name',
    email: 'Email',
    phone: 'Phone Number',
    city: 'City, Country',
  });

  const applyStateToProps = () => {
    setGeneralObject(props.generalObject);
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
    setGeneralObject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setUpdating(false);
    props.onUpdate(generalObject);
  };

  const updateView = (
    <form onSubmit={onSubmitForm} className="form">
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          value={generalObject.name}
          onChange={onInputChange}
        />
      </label>
      <label htmlFor="city">
        City, Country:
        <input
          type="text"
          name="city"
          value={generalObject.city}
          onChange={onInputChange}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          name="email"
          value={generalObject.email}
          onChange={onInputChange}
        />
      </label>
      <label htmlFor="phone">
        Phone Number:
        <input
          type="text"
          name="phone"
          value={generalObject.phone}
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
    <div className="general--static">
      <div className="general--static--line">
        <h2>{props.generalObject.name}</h2>
      </div>
      <div className="general--static--line">
        <p>{props.generalObject.city}</p>
        <p>{props.generalObject.email}</p>
        <p>{props.generalObject.phone}</p>
      </div>
      <div className="general--static--line">
        <button
          type="button"
          onClick={updateMode}
          className="btn btn--light btn--small"
        >
          Edit
        </button>
      </div>
    </div>
  );

  return <div>{updating ? updateView : staticView}</div>;
};

export default General;
