import React,{useState} from "react";
import './Details.css'
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const Details=(props)=>{
    const [enteredUsername,setEnteredUsername]=useState('')
    const [enteredAge,setEnteredAge]=useState('')
    const [error,setError]=useState('')
   const detailsHandler=(event)=>{
    event.preventDefault();
    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
        setError({
            title:"Invalid Input",
            message:"Please enter valid details"
        })
        return;
    }
    if(+enteredAge<1){
        setError({
            title:"Invalid Age",
            message:"Please enter valid Age greater than zero"
        })
        return;
    }
    props.onAddUser(enteredUsername,enteredAge);
    //console.log()
    setEnteredUsername('')
    setEnteredAge('')
    
   }
   const usernameChangeHandler=(event)=>{
    setEnteredUsername(event.target.value)
    
    
   }
   const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value)
    
   }
   const errorHandler=()=>{
    setError(null)
   }
    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> } 
            <Card className="input">
             <form onSubmit={detailsHandler}>
            <label htmlFor="username">Name</label>
            <input
             id="username"
              type="text" 
              value={enteredUsername}
               onChange={usernameChangeHandler}
               />
            <label htmlFor='age'>Age</label>
            <input id="age"
             type="number"
              value={enteredAge}
               onChange={ageChangeHandler}
               />
            <Button type="submit">
                Add Details
                </Button>
        </form>
        </Card>
        </div>
       
       
        
       
    )
}
export default Details;