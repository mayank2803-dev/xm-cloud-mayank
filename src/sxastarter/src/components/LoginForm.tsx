import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
interface CustomProps {
  fields: {
    Heading: Field<string>;
    Email: Field<string>;
    Password: Field<string>;
    ButtonText: Field<string>;
  };
}
const LoginForm = (props: CustomProps): JSX.Element => {
  return (
    <div className="boxed" style={{ margin: 'auto', padding: '40px' }}>
      <h1>{props.fields.Heading.value}</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" name="username" />
        </div>

        <div className="mb-3">
          <label>{props.fields.Password.value}</label>
          <input type="password" name="password" className="form-control" />
        </div>

        <button className="btn btn-primary" type="submit">
          {props.fields.ButtonText.value}
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
