import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons/lib/icons";
import { deleteUser, updateUser } from "../redux/actions";

const User = ({user}) => {  //this where the instances of user objects initially comes from... well actually from TodoList.js which instantiates User.js  
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [salary, setSalary] = useState(user.salary);


  return (

    <div className="row p-3">  {/* className="user"  */}   

        <div className="col-1 align-middle">Id # {user.id}</div>  {/*  className="user-id"  */}
        <div className="col-2 align-middle">{user.firstName}</div>   {/* className="user-message"  */}
        <div className="col-2 align-middle">{user.lastName}</div>   {/* className="user-message"  */}
        <div className="col-2 align-middle">{user.occupation}</div>   {/* className="user-message"  */}
        <div className="col-2 align-middle">{user.dateOfHire}</div>   {/* className="user-message"  */}
        {edit ? ( 
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        ) : (
          <div  className="col-1 align-middle">{user.salary}</div>   //this is the line that actually initially displays the salary   {/* className="user-message"  */}
        )}
          <div className="col-2 align-middle">
            <EditOutlined
              /* className="edit-icon"   */
              onClick={() => {
                dispatch(updateUser({ ...user, salary: salary }));
                if (edit) {
                  setSalary(user.salary);
                }
                setEdit(!edit);
              }}
            />
            <DeleteOutlined
                /* className="delete-icon"   */
              onClick={() => dispatch(deleteUser(user.id))}
            />
          </div>
    </div>

  );
};

export default User;
