// import React, {useState,setState} from 'react';
// import { Form, Button } from "react-bootstrap"
// import { Link } from "react-router-dom"
// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { getFirestore, collection, addDoc  } from "firebase/firestore";
// import { AuthProvider } from '../../contexts/AuthContext';


// export function RegistrationForm() {
    
//     const [firstName, setFirstName] = useState();
//     const [lastName, setLastName] = useState();
//     const [email, setEmail] = useState();
//     const [password,setPassword] = useState();
//     const [confirmPassword,setConfirmPassword] = useState();

//     const handleInputChange = (e) => {
//         const {id , value} = e.target;
//         if(id === "firstName"){
//             setFirstName(value);
//         }
//         if(id === "lastName"){
//             setLastName(value);
//         }
//         if(id === "email"){
//             setEmail(value);
//         }
//         if(id === "password"){
//             setPassword(value);
//         }
//         if(id === "confirmPassword"){
//             setConfirmPassword(value);
//         }

//     }

//     const handleSubmit = () =>{
//         }

//     return(
//         <div className="form">
//             <div className="form-body">
//                 <div className="username">
//                     <label className="form__label" for="firstName">First Name </label>
//                     <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
//                 </div>
//                 <div className="lastname">
//                     <label className="form__label" for="lastName">Last Name </label>
//                     <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
//                 </div>
//                 <div className="email">
//                     <label className="form__label" for="email">Email </label>
//                     <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
//                 </div>
//                 <div className="password">
//                     <label className="form__label" for="password">Password </label>
//                     <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
//                 </div>
//                 <div className="confirm-password">
//                     <label className="form__label" for="confirmPassword">Confirm Password </label>
//                     <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
//                 </div>
//             </div>
//             <div class="footer">
//                 <Button onClick={()=>handleSubmit()} type="submit" class="btn">Register</Button>
//             </div>
//         </div>
       
//     )       
// }
  
// export const addUser = async (user) => {
//  const docRef = await addDoc(collection(db, "users"), user);
// console.log("Document written with ID: ", docRef.id);   

// }

import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import InputFields from "../component/InputFields.jsx";
import { useAuth } from "/workspace/react-hello-webapp/src/contexts/AuthContext.js";
import { Link, useHistory } from "react-router-dom";
import { AuthProvider } from '/workspace/react-hello-webapp/src/contexts/AuthContext.js';


export const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    //Do not reload page when submitting
    e.preventDefault();
    //Confirm passwords match when creating an account
    //Return an error if passwords do not match and prevent creation
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    if (passwordRef.current.value.length < 6) {
      return setError("Password must be minimum 6 characters");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <InputFields
              id="email"
              placeholder="Email"
              type="email"
              refs={emailRef}
            />
            <InputFields
              id="password"
              placeholder="Password"
              type="password"
              refs={passwordRef}
            />
            <InputFields
              id="password-confirm"
              placeholder="Password Confirm"
              type="password"
              refs={passwordConfirmRef}
            />
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Sign Up
            </Button>
          </form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
};

// Add a new document with a generated id.







