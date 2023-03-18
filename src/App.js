import React, {useState} from 'react';
import Details from './components/UserDetails/Details';
import UserList from './components/UserDetails/UserList';
 
function App() {
  const[enteredData,setEnteredData]=useState([])
  const addUserHandler=(uName,uAge)=>{
setEnteredData((prevList)=>{
   return[...prevList,{name:uName,age:uAge,id:Math.random().toString()}]
})
  }
  return (
    <div>
     <Details onAddUser={addUserHandler}/>
     <UserList users={enteredData}/>
    </div>
  );
}

export default App;
