import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

const UserList = ({userSortOrder, userFilter}) => {
  const users = useSelector((state) => state);
  console.log('userFilter:', userFilter)

  Array.prototype.sortBy = function() {
    function _sortByAttr(attr) {
      var sortOrder = 1;
      if (attr[0] == "-") {
        sortOrder = -1;
        attr = attr.substr(1);
      }
      return function(a, b) {
        var result = (a[attr] < b[attr]) ? -1 : (a[attr] > b[attr]) ? 1 : 0;
        return result * sortOrder;
      }
    }
  
    function _getSortFunc() {
      var args = arguments;
      return function(a, b) {
        for (var result = 0, i = 0; result == 0 && i < args.length; i++) {
          result = _sortByAttr(args[i])(a, b);
        }
        return result;
      }
    }
    return this.sort(_getSortFunc.apply(null, arguments));
  }

  Array.prototype.myFilter = function (callbackFn, typeOfFilter) {
    let arr = [];
    
    switch(typeOfFilter) {
      case "smallerThan2500":
        for (let i = 0; i < this.length; i++) {
          if (callbackFn(this[i].salary < 2500)) {
            arr.push(this[i]);
          }
        }
        break;
      case "between2500and4000":
        for (let i = 0; i < this.length; i++) {
          if (callbackFn(this[i].salary > 4000)) {
            arr.push(this[i]);
          }else if  (callbackFn(this[i].salary < 2500)) {
            arr.push(this[i]);
          }
        }
        break;
      case "biggerThan4000":
        for (let i = 0; i < this.length; i++) {
          if (callbackFn(this[i].salary > 4000)) {
            arr.push(this[i]);
          }
        }
        break;
      case "noFilter":
        for (let i = 0; i < this.length; i++) {
          if (callbackFn(this[i])) {
            arr.push(this[i]);
          }
        }
        break;
    }

    return arr;
  };

  return (
    
    <div className="container">
      <div className="row main-row">
        <div className="col-12 align-center">
        {  users.sortBy(userSortOrder).myFilter((el)=>{return el}, userFilter).map((user) => {
          return <User key={user.id} user={user} />;
        }) }
        </div>
      </div>
    </div>
  );
};

export default UserList;
