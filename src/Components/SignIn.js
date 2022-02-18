import React from 'react';
import { useState } from 'react';
import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  let navigate = useNavigate(); 
  const routeChanges = () =>{ 
    let path = `login`; 
    navigate(path);
  }
  const userdetails = useSelector(state => state.userdetails);
  const dispatch = useDispatch();
  const addusers = (val)=>{
    dispatch({ type: "ADD_USER_DETAILS", payload: val })
  }
 

  return (
    <>
    
    <div class="container d-flex justify-content-center">
     
   <Formik
                initialValues={{ name: "", description: "" }}
                onSubmit={async (values) => {
                    addusers(values);
                    routeChanges();
                  
                }}
            >
                <Form>
                <div className="row m-2">
                  <div class="col">
                   <h4>Sign In Form</h4>
                    </div></div>
                <div className="row m-2">
                  <div class="col">
                    <Field name="name" type="text" />
                    </div></div>
                    <div className="row m-2">
                  <div class="col">
                    <Field name="description" type="text" />
                    </div></div>
                    <div className="row m-2">
                  <div class="col">
                    <button class="btn btn-primary m-3" type="submit">Sign In</button>
                      </div>
                      </div>
                </Form>
            </Formik>
            {userdetails.map(elem => <p>{elem.name}{elem.description}</p>)}
            </div>
            </>
  )
}

export default SignIn;



        //     <div className='conatiner d-flex justify-content-center'>
        //     <div class="card text-center ">
        //   <div class="card-header">
        //     Sign In Form 
        //   </div>
        //   <div class="card-body">
        //   <form className="d-flex ">
        //   <Formik
        //                 initialValues={{ name: "", description: "" }}
        //                 onSubmit={async (values) => {
        //                     addProject({...values,issues:[]});
        //                     setActive(true)
        //                     setModal(false);
        //                 }}
        //             >
        //      <div className='Container m-3 justify-content-center'>
            
        //          <div class="row mb-3">
        //          <Form>
        //             <label for="exampleFormControlInput1" class="mb-2">Username</label>
        //           <Field type="text" class="form-control" id="exampleFormControlInput1" placeholder="Username" onChange={(e)=> setUsername(e.target.value)}/>
        //      </div>
        //     <div class="row mb-3">
        //              <label for="exampleFormControlTextarea1" class="mb-2">Password</label>
        //              <Field type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
        //         </div>
        //        <div class="d-flex space-evenly">
        //         <button type="button" class="btn btn-primary m-3" onClick={submitHandler}>Sign In</button>
                
        //        </div>
        //    </div>
        //    </Form>
        //      </Formik>
        //   </div>
        //   <div class="card-footer text-muted">
        //     Redirect You  To Login Page
        //   </div>
        // </div>
        // </div>  
        