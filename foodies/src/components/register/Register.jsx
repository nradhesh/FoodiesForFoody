import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">Register</h5>
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="Full Name"
                    />
                    <label htmlFor="fullName">Full Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="email">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="d-grid mb-3">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      SIGN IN
                    </button>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-danger btn-login text-uppercase fw-bold"
                      type="reset"
                    >
                      RESET
                    </button>
                  </div>

                  <hr className="my-4" />
                  <p className="text-center">
                    Already have an account? <a href="/login">Sign In</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
