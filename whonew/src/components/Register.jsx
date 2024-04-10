import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setuser] = useState({
    username: "",
    age: "",
    password: "",
    gender: "",
    workingnonworking: "",
    maritalstatus: ""
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setuser({ ...user, [name]: value });
  };

  // handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, age, password, gender, workingnonworking, maritalstatus } = user;
    try {
      const res = await fetch('/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username, age, password, gender, workingnonworking, maritalstatus
        })
      });
      if (res.status === 400 || !res) {
        window.alert("Already Used Details");
      } else {
        window.alert("Registered Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div
            className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center 
          form order-2"
          >
            <h1 className="display-4 fw-bolder mb-5">Hey There!</h1>
            <p className="lead text-center">Enter Your Details To Register</p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">Register</h1>
            <form onSubmit={handleSubmit} method="POST">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="age"
                  name="age"
                  value={user.age}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div className="input-group mb-3">
                <select
                  className="form-select"
                  id="gender"
                  name="gender"
                  value={user.gender}
                  onChange={handleInput}
                >
                  <option defaultValue>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="input-group mb-3">
                <select
                  className="form-select"
                  id="workingnonworking"
                  name="workingnonworking"
                  value={user.workingnonworking}
                  onChange={handleInput}
                >
                  <option defaultValue>Working/Non-Working</option>
                  <option value="working">Working</option>
                  <option value="nonworking">Non-Working</option>
                </select>
              </div>
              <div className="input-group mb-3">
                <select
                  className="form-select"
                  id="maritalstatus"
                  name="maritalstatus"
                  value={user.maritalstatus}
                  onChange={handleInput}
                >
                  <option defaultValue>Marital Status</option>
                  <option value="married">Married</option>
                  <option value="single">Single</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I Agree Terms and Conditions
                </label>
              </div>

              <button type="submit" className="btn btn-outline-primary w-100 mt-4 rounded-pill">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
