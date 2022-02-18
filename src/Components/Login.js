import React from 'react';
import { useState } from 'react';
import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Login() {
  let navigate = useNavigate(); 
  const routeChanges = () =>{ 
    let path = "Issues";
    navigate(path);
  }
  const[username,setUsername] = useState("");
  const[password,setPassword] = useState("");
  const userdetails = useSelector(state => state.userdetails);
  const submitHandler = ()=>{
        userdetails.map( elem => {
          if(elem.name === username && elem.description === password){
           let path ="Issues";
           navigate(path);
          }
          else{
            let path = "/login"
            navigate(path);
          }
        })
  }
    
  return (
    <div className='conatiner d-flex justify-content-center'>
    <div class="card text-center ">
  <div class="card-header">
    Log In Form 
  </div>
  <div class="card-body">
  <form className="d-flex ">
     <div className='Container m-3 justify-content-center'>
         <div class="row mb-3">
            <label for="exampleFormControlInput1" class="mb-2">Username</label>
           <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Username" onChange={(e)=> setUsername(e.target.value)}/>
     </div>
    <div class="row mb-3">
             <label for="exampleFormControlTextarea1" class="mb-2">Password</label>
             <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
        </div>
       <div class="d-flex space-evenly">
        <button type="button" class="btn btn-primary m-3" onClick={submitHandler}>Login</button>
        
       </div>
   </div>
     </form>
    
  </div>
  <div class="card-footer text-muted">
    Redirect You  To Issues Page
  </div>
</div>
</div> 

  )
}

export default Login