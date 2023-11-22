import axios from "axios";
import { useState } from "react";

const Header = (props) => {
  let [newUser, setNewUser] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    password: "",
  });
  let [login, setLogin] = useState({
    email: "",
    password: "",
  });
  let saveNewUser = async () => {
    try {
      let url = `http://localhost:3030/api/create-user-account`;
      let { data } = await axios.post(url, { ...newUser });
      alert(data.message);
      if (data.status === true) {
        window.location.assign("/");
      }
    } catch (error) {
      alert("server error");
    }
  };
  let userLogin = async () => {
    try {
      let url = `http://localhost:3030/api/user-login`;
      let { data } = await axios.post(url, { ...login });
      alert(data.message);
      console.log(data);
      if (data.status === true) {
        // window.location.assign("/");
      }
    } catch (error) {
      alert("server error");
    }
  };
  return (
    <>
      <div
        className="modal fade"
        id="modalUserNewAccount"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel2">
                Create A New Account
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter full Name"
                  value={newUser.name}
                  onChange={(event) => {
                    setNewUser({ ...newUser, name: event.target.value });
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="mobile"
                  placeholder="Enter Mobile"
                  value={newUser.mobile}
                  onChange={(event) => {
                    setNewUser({ ...newUser, mobile: event.target.value });
                  }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={newUser.email}
                  onChange={(event) => {
                    setNewUser({ ...newUser, email: event.target.value });
                  }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Address
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={newUser.address}
                  onChange={(event) => {
                    setNewUser({ ...newUser, address: event.target.value });
                  }}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={newUser.password}
                  onChange={(event) => {
                    setNewUser({ ...newUser, password: event.target.value });
                  }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={saveNewUser} className="btn btn-success">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* login */}
      <div
        className="modal fade"
        id="modalUseLogin"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel2">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="loginEmail" className="form-label">
                  Email Id
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="loginEmail"
                  placeholder="Enter Email"
                  value={login.email}
                  onChange={(event) => {
                    setLogin({ ...login, email: event.target.value });
                  }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="login-password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="login-password"
                  placeholder="Enter password"
                  value={login.password}
                  onChange={(event) => {
                    setLogin({ ...login, password: event.target.value });
                  }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={userLogin} className="btn btn-success">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`col-12 d-flex justify-content-between py-2 ${props.bgColor}`}
      >
        <p className="m-0 brand">e!</p>
        <div>
          <button
            className="btn text-white"
            data-bs-toggle="modal"
            data-bs-target="#modalUseLogin"
          >
            Login
          </button>
          <button
            className="btn btn-outline-light"
            data-bs-toggle="modal"
            data-bs-target="#modalUserNewAccount"
          >
            <i className="fa fa-search" aria-hidden="true"></i>Create a Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
