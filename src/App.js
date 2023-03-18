import React, {useState,Fragment} from 'react';
import Details from './components/UserDetails/Details';
import UserList from './components/UserDetails/UserList';
 
function App() {
  const[enteredData,setEnteredData]=useState([])
  const addUserHandler=(uName,uAge,uCollege)=>{
setEnteredData((prevList)=>{
   return[...prevList,{name:uName,age:uAge,college:uCollege,id:Math.random().toString()}]
})
  }
  return (
   <Fragment>
     <Details onAddUser={addUserHandler}/>
     <UserList users={enteredData}/>
  
   </Fragment>
    
  );
}

export default App;
