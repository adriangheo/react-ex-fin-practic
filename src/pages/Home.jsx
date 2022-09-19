import { Link } from 'react-router-dom';
import InputUser from "./../components/InputUser";

const Home = () => {
   return(
    <div>
         <div className='text-center'>Link for visualising all inserted users,  <Link to="/page01" >here</Link></div>
         
         <h1 className='text-center'>Home Page</h1>
         <InputUser />
    </div>  
   )
}

export default Home;