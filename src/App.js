import "./App.css";
import { Routes, Route} from "react-router-dom";
import Page01 from './pages/Page01';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/page01" element={<Page01/>}/>
      </Routes>
    </div>
  );
}

export default App;
