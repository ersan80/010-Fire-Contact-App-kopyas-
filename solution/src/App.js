import './App.css';
import {useState} from "react";
import FormComponent from './components/form/FormComponent';
import Contacts from "./components/contacts/Contacts"
import { AddUser,EditUser } from './utils/functions';
import { ToastContainer } from "react-toastify";

const initialValues={username:"",phoneNumber:"",gender:"NO INFO"}

function App() {
 const [info,setInfo]=useState(initialValues);

 const handleFormSubmit=(e)=>{
   e.preventDefault();
   console.log(info)
   if(info.id){
     EditUser(info)
   }
   else{
        AddUser(info)
   }
 
 }

 const editHandler =(id,userName,gender,phoneNumber)=>{
   setInfo({id,userName,gender,phoneNumber})
   
 }

  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit}/>
      <Contacts editHandler = {editHandler}/>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
