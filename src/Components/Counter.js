import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, Form } from "formik";
import ReactDOM from "react-dom";
import Select from "react-select";
import { useState } from 'react';
import Header from './Header';
export default function Counter() {
    const options = [
        {
          id: 1,
          name: "bug"
        },
        {
          id: 2,
          name: "bug-unconfirmed"
        },
        {
          id: 3,
          name: "bug-confirmed"
        }
      ];
      const authors = [
        {
          id: 1,
          name: "Prachi-2002"
        },
        {
          id: 2,
          name: "Sandy-111"
        },
        {
          id: 3,
          name: "Aman-2000"
        }
      ];
      const assignee = [
        {
          id: 1,
          name: "Prachi"
        },
        {
          id: 2,
          name: "Sandy"
        },
        {
          id: 3,
          name: "Aman"
        }
      ];
    const [active, setActive] = useState(false);
    const[modal,setModal] = useState(false);
    const[open,setOpen] = useState(false);
    const[optionValue,setOptionValue] = useState(options);
    const projectlist = useSelector(state => state.allprojects);
    const activeProject = useSelector(state => state.activeproject);
    const filteredData = useSelector(state => state.filteredResults)
    const project = useSelector(state => state.project);
    const isactive = useSelector(state => state.active);

    const dispatch = useDispatch();
    
    const addProject = (val) => {
        dispatch({ type: "ADDPROJECT", payload: val })
    }
    const activeProjectList = (values)=>{
        dispatch({ type: "SETACTIVEPROJECT", payload: values })
    }
    const addProjectList = (item) => {
        dispatch({ type: "ADDPROJECTISSUE", payload: item })
    }
    const handleChange = e =>{
        setOptionValue(e);
        dispatch({type:"FILTER",payload:e})
        console.log("optionValue",e);
    };
    const issueList = filteredData ?  projectlist && activeProject >-1 && projectlist[activeProject]: filteredData ;
    return (
            <>
            <Header/>
            <div class="container  p-0 m-0">
      <div class="row m-5 ">
        <div class="col-2 ">
        <button class="btn btn-success ml-2" onClick={()=> setModal(true) }>Add Project</button>
         
            </div> 
            <div class="col-3 ">
            <Select
          onChange={(e) =>{handleChange(e)}}
          options={options}
          getOptionValue={opt => opt.id}
          getOptionLabel={opt => opt.name}
        />
         
            </div>  <div class="col-2">
            <Select
        //   onChange={handleChange}
          options={authors}
          getOptionValue={opt => opt.id}
          getOptionLabel={opt => opt.name}
        />
            </div> 
            <div class="col-3">
            <Select
        //   onChange={handleChange}
          options={assignee}
          getOptionValue={opt => opt.id}
          getOptionLabel={opt => opt.name}
        />
            </div> 
            <div class="col-2">
            <button class="btn btn-success ml-2" onClick={()=> setOpen(true)}>NewIssue</button>
                </div>    
           </div>
        <div class="row">
          <div class="col-4">
            {modal && <Formik
                initialValues={{ name: "", description: "" }}
                onSubmit={async (values) => {
                    addProject({...values,issues:[]});
                    setActive(true)
                    setModal(false);
                }}
            >
                <Form>
                    <p><Field name="name" type="text" /></p>
                    <p><Field name="description" type="text" /></p>
                    <p><button class="btn btn-success ml-2" type="submit">AddProject</button></p>
                </Form>
            </Formik>}
            </div>
            <div class="col-8">

            {console.log(`${activeProject}active project`)}
           { 
              open &&(activeProject > -1) && <Formik
                initialValues={{ label: "", issue: "",assignee: "",author: "" }}
                onSubmit={async (issues) => {
                    addProjectList(issues);
                    setOpen(false);
                }}
            >
                <Form>
                    <p><Field name="label" type="text" placeholder="Enter Your Label Here" /></p>
                    <p><Field name="issue" type="text" placeholder="Enter Your Issue Here" /></p>                
                    <p><Field name="assignee" type="text" placeholder="Enter Your Assignee Here"/></p>                
                    <p><Field name="author" type="text" placeholder="Enter Your Author Here"/></p>                
                    <p><button class="btn btn-success ml-2"type="submit">AddIssue</button></p>
                </Form>
            </Formik>

}</div>
</div>
{console.log("all",projectlist)}
{console.log(typeof projectlist[activeProject],"listing",activeProject >-1 &&project[activeProject])}
<div class="row">
    <div class="col-4">
        { projectlist.map((elem,i) => {return <div class="card">
              <div class="card-body"><h4 onClick={() => activeProjectList(i)}>{elem.name}</h4></div>
            </div>})}</div>
          <div class="col-8"> 
       
           {filteredData && filteredData.map((e,i) => {
              return <div class="card">
              <div class="card-body"> 
          <h4>{e.label}</h4>
          <h5>{e.issue}--{e.assignee}--{e.author}</h5>
          </div>
           </div> 
          }) 
        }
           
           {projectlist && activeProject >-1 && projectlist[activeProject].issues.map((e,i) => {
               return <div class="card">
               <div class="card-body"> 
           <h4>{e.label}</h4>
           <h5>{e.issue}--{e.assignee}--{e.author}</h5>
           </div>
            </div> 
           })}
          </div>
        </div>
        </div>
        </>
    )
}