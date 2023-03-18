import React,{useState,useRef} from "react";
import './Details.css'
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrappper from "../Helper/Wrappper";
const Details=(props)=>{
   const nameInputRef= useRef();
   const ageInputRef=useRef();
   const collegeInputRef=useRef();
    const [error,setError]=useState('')
   const detailsHandler=(event)=>{
    event.preventDefault();
    const enteredName=nameInputRef.current.value;
    const enteredUserAge=ageInputRef.current.value;
    const enteredCollege=collegeInputRef.current.value;
    if(enteredName.trim().length===0 || enteredUserAge.trim().length===0){
        setError({
            title:"Invalid Input",
            message:"Please enter valid details"
        })
        return;
    }
    if(+enteredUserAge<1){
        setError({
            title:"Invalid Age",
            message:"Please enter valid Age greater than zero"
        })
        return;
    }
    props.onAddUser(enteredName,enteredUserAge,enteredCollege);
    //console.log()
    nameInputRef.current.value=""
    ageInputRef.current.value=""
    collegeInputRef.current.value=""
    
   }
  
  
   const errorHandler=()=>{
    setError(null)
   }
    return(
        <Wrappper> {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> } 
        <Card className="input">
         <form onSubmit={detailsHandler}>
        <label htmlFor="username">Name</label>
        <input id="username"  type="text"   ref={nameInputRef} />
        <label htmlFor='age'>Age</label>
        <input id="age"   type="number"  ref={ageInputRef} />
        <label>College Name</label>
        <input type="text"  ref={collegeInputRef}/>
        <Button type="submit">
            Add Details
        </Button>
    </form>
    </Card></Wrappper>
           
       
       
       
        
       
    )
}
export default Details;