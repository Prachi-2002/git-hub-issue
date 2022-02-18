
import './App.css';
import Header from './Components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";


import Counter from './Components/Counter';
import Login from './Components/Login';
import SignIn from './Components/SignIn';
function App() {
  return (
    
      <div>
        <BrowserRouter >
   <Routes>
     <Route path="/" element={<SignIn/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
      <Route path="/login/Issues" element={<Counter />}></Route>
     {/*<Route path="/DropDown" element={<DropDownItem />}></Route>
     <Route path="/Labels" element={<Labels />}></Route>
     <Route path="/NewIssue" element={<NewIssuePage />}></Route> */}


   </Routes>
   </BrowserRouter>
      </div>
  );
}

export default App;
