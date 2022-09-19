// Note: This is actually the component for inputing users... 
// ... the name has been chosen for standardisation with the rest of the component names
import React, { useState } from "react";
// import { Button, Input } from "antd";
import { addUser } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// TODO: implement firstName, lastName, occupation, salary, dateOfHire 
const InputUser = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [occupation, setOccupation] = useState();
  const [salary, setSalary] = useState();
  const [dateOfHire, setDateOfHire] = useState();

  const dispatch = useDispatch();

  const users = useSelector((state) => state);

  const maxId = users.reduce(
    (max, user) => (user.id > max ? user.id : max),
    users[0].id
  );


  return (
    <div>
      <div className="container">
      <h2 className="py-5 text-center">Add a new user</h2>
      <form className="needs-validation">
        <div className="row">

          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">First name</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" id="firstName" placeholder="Joe" required=""
            />
          <div data-lastpass-icon-root="true" style={{position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important'}}></div></div>

          <div className="col-md-6 mb-3">
            <label htmlFor="lastName">Last name</label>
            <input type="text"  value={lastName}  onChange={(e) => setLastName(e.target.value)} className="form-control" id="lastName" placeholder="Doe" required=""/>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="occupation">Occupation</label>
          <input type="text" value={occupation}  onChange={(e) => setOccupation(e.target.value)} className="form-control" id="occupation" placeholder="designer grafic" required=""/>
        </div>
  

        <div className="mb-3">
          <label htmlFor="salary">Salary</label>
          <input type="number"  value={salary} onChange={(e) => setSalary(e.target.value)} className="form-control" id="salary" placeholder="3000" required=""/>
        </div>
 
        <div className="mb-3">
          <label htmlFor="dateOfHire">DateOfHire</label>
          <input type="date"  value={dateOfHire} onChange={(e) => setDateOfHire(e.target.value)} className="form-control" id="dateOfHire" placeholder="2021.01.31"/>
        </div>
  

        <button 
        className="btn btn-primary btn-lg btn-block" 
        type="primary" 
        onClick={() =>
            dispatch(
              addUser({
                id: maxId + 1,
                firstName: firstName,
                lastName: lastName,
                occupation: occupation,
                salary: salary,
                dateOfHire: dateOfHire 
              })
            )(setSalary(""))
          }>Add User</button>
      </form>
      </div>
    </div>
  );
};

export default InputUser;
