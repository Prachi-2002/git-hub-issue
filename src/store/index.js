import {createStore} from "redux";
const initialState = {
        project:[],
        allprojects:[],
        active:false,
        userdetails:[],
        activeproject:-1,
        filteredResult:[],

}


const counterReducer = ((state = initialState ,action)=>{
    if(action.type ==="INCREMENT"){
       return { counter:state.counter+1
       }
    }
    if(action.type==="DECREMENT"){
        return {
            counter:state.counter-action.payload
        }
    }
    if(action.type ==="ADDPROJECT"){
        const updatedprojects = [...state.allprojects,action.payload];
        localStorage.setItem("data",{allprojects:updatedprojects})
        return {

            ...state,
            allprojects:updatedprojects
            
        }
     
    }
    if(action.type === "ADDPROJECTISSUE"){
        localStorage.getItem("data")
        const updatedProjectdata = state.allprojects.map((item,i)=>{if(i === state.activeproject){
            let upitem = item;
            upitem.issues= [...upitem.issues,action.payload];           
            return upitem;
          }else{
            return item;
          }})
          return {
              ...state,issues:updatedProjectdata
          }
          
          
}
    if(action.type === "SETACTIVEPROJECT"){
      
        return{...state,
        activeproject:action.payload
        }
   
    }
    if(action.type==="ADD_USER_DETAILS"){
        return {
            ...state,
            userdetails:[...state.userdetails,action.payload]
        }
    }
    if(action.type==="CHECK_USER_DETAILS"){
   if(state.userdetails.filter(elem => elem.name === action.payload.name)){
       
   }

    }
    if(action.type==="FILTER"){
        console.log("action dta",action.payload);
        const filteredData = state.allprojects[state.activeproject].
        issues.filter(elem =>elem.label===action.payload.name
         )
    console.log(filteredData);
    return {
        ...state,filteredResult:filteredData
    }

    }
    console.log("state overall",state);
    return state;
})
const store = createStore( counterReducer);
export default store;