import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import AddUser from './component/AddUser';
import EditUser from './component/EditUser';
// import { createBrowserHistory } from "history";


function App() {
  // const history = createBrowserHistory();  
  return (
    <div className="App">
      <Routes >
        <Route exact path="/" element={<Home/>} />
        <Route  exact path="/adduser" element={<AddUser/>} />
        <Route  exact path="/edituser/:id" element={<EditUser/>} />
      </Routes>
    </div>
  );
}

export default App;
