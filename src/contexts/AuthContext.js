// import React, { useContext, useState, useEffect } from "react"
// import auth from "firebase/auth"
// import { getAuth } from "firebase/auth";
// import { signInWithEmailAndPassword } from "firebase/auth"

// const AuthContext = React.createContext()

// export function useAuth() {
//   return useContext(AuthContext)
// }

// export function AuthProvider({ children }) {
//    const [currentUser, setCurrentUser] = useState()
//   const [loading, setLoading] = useState(true)

//  const auth = getAuth();
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
    

//   function signup(email, password) {
//     return auth.createUserWithEmailAndPassword(email, password)
//   }

//   function login(email, password) {
//     return auth.signInWithEmailAndPassword(email, password)
//   }

//   function logout() {
//     return auth.signOut()
//   }

//   function resetPassword(email) {
//     return auth.sendPasswordResetEmail(email)
//   }

//   function updateEmail(email) {
//     return currentUser.updateEmail(email)
//   }

//   function updatePassword(password) {
//     return currentUser.updatePassword(password)
//   }

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       setCurrentUser(user)
//       setLoading(false)
//     })

//     return unsubscribe
//   }, [])

//   const value = {
//     currentUser,
//     login,
//     signup,
//     logout,
//     resetPassword,
//     updateEmail,
//     updatePassword
//   }

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   )
// }

import React, { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { auth } from "/workspace/react-hello-webapp/src/js/firebaseConfig.js";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  //Send views to context to be accessed by views and components
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};









