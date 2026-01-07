import React from 'react';

class RegisterForm extends React.Component {
  static async getInitialProps() {
    console.log('Get Initial Props loaded....');
  }
  static async getServerSideProps() {
    console.log('Get Server side Props loaded....');
  }
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f5f5f5', // Optional background
        }}
      >
        <div
          className="boxed"
          style={{
            padding: '40px',
            boxShadow: '0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%)',
            backgroundColor: '#fff',
            borderRadius: '8px',
            width: '100%',
            maxWidth: '400px',
          }}
        >
          <h1 style={{ textAlign: 'center' }}>Register Yourself</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input type="text" className="form-control" name="firstName" id="firstName" />
            </div>

            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input type="text" className="form-control" name="lastName" id="lastName" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" name="email" id="email" />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" name="password" id="password" />
            </div>

            <button className="btn btn-primary w-100" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default RegisterForm;
