import { Link } from 'react-router-dom';
import UserList from '../components/UserList';
import { useState } from "react";

const Page01 = () => {
    const [userSortOrder, changeSortOrder] = useState('default');
    const [userFilter, changeUserFilter] = useState('noFilter');
  
    return(
    <div>
        <div className='text-center'>Link for adding another user, <Link to="/" >here</Link></div>
        
        <h1 className='blog-header-logo text-dark text-center'>List of all the users</h1>
        <UserList userSortOrder={userSortOrder} userFilter={userFilter}  />


        <select onChange={ (event) => changeSortOrder(event.target.value)} >  {/* className="cstm-drp-dwn-elm"  */}
            <option value="id">sortByID</option>
            <option value="lastName">sortByLastName</option> 
            <option value="salary">sortBySalary</option>
        </select>`


        <select onChange={ (event) => changeUserFilter(event.target.value)} >  {/* className="cstm-drp-dwn-elm"  */}
            <option value="smallerThan2500">smallerThan2500</option>
            <option value="between2500and4000">between2500and4000</option> 
            <option value="biggerThan4000">biggerThan4000</option>
            <option value="noFilter">noFilter</option>
        </select>`


    </div>
   )
}

export default Page01;