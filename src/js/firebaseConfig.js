// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAPFz-fs52mSxLWgZtRqTzjLVj6BLQ-0MU",
//   authDomain: "quizapp-6f202.firebaseapp.com",
//   projectId: "quizapp-6f202",
//   storageBucket: "quizapp-6f202.appspot.com",
//   messagingSenderId: "849014910616",
//   appId: "1:849014910616:web:e46160d7fb5b3dffad2aed"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const db = getFirestore(app);
// export default app

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//Access API keys stored locally in .env file for security
const app = firebase.initializeApp({
  apiKey: "AIzaSyAPFz-fs52mSxLWgZtRqTzjLVj6BLQ-0MU",
  authDomain: "quizapp-6f202.firebaseapp.com",
  projectId: "quizapp-6f202",
  storageBucket: "quizapp-6f202.appspot.com",
  messagingSenderId: "849014910616",
  appId: "1:849014910616:web:e46160d7fb5b3dffad2aed"
});

export const auth = app.auth();
export default app;