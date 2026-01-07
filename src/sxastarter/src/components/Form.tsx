import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import React, { useState } from 'react';
import config from '../../scjssconfig.json';
import { withSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
interface CustomProps {
  fields: {
    Heading: Field<string>;
    Email: Field<string>;
    Password: Field<string>;
    ButtonText: Field<string>;
  };
}
const Form = (props: CustomProps): JSX.Element => {
  console.log('Sitecore Context : ' + withSitecoreContext());
  const [formData, setFormData] = useState({
    domain: 'sitecore',
    username: '',
    password: '',
    success: false,
    invalid: false,
    requesting: false,
  });

  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState: any) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const payload = {
      domain: 'sitecore',
      username: formData.username,
      password: formData.password,
    };
    const host = `${config.sitecore.layoutServiceHost}/sitecore/api/ssc/auth/login?sc_apikey=${config.sitecore.apiKey}`;

    fetch(host, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then(({ ok }) => {
        if (ok) {
          alert('Success');
          formData.success = true;
          localStorage.setItem('isUserLoggedIn', 'true');
        } else {
          alert('Failure');
          formData.success = false;
          localStorage.removeItem('isUserLoggedIn');
        }
      })
      .catch((error) => console.error('Fetch error:', error));
  };
  return (
    <div
      className="boxed"
      style={{ margin: 'auto', backgroundColor: '#00c3f24a', padding: '40px' }}
    >
      {formData.invalid && (
        <div className="alert alert-danger" role="alert">
          Invalid Username or Password
        </div>
      )}
      <h1>{props.fields.Heading.value}</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={handleInput}
            value={formData.username}
          />
        </div>

        <div className="mb-3">
          <label>{props.fields.Password.value}</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleInput}
            value={formData.password}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          {props.fields.ButtonText.value}
        </button>
      </form>
    </div>
  );
};
export default Form;
