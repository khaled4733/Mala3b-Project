import { auth,app } from "./Config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  signInWithCredential,
  FacebookAuthProvider, getAuth, updateCurrentUser,
} from "firebase/auth";

const authentication = getAuth(app);

// onAuthStateChanged(auth, (user) => {
//   if (user != null) {
//     console.log("We are authenticated now!");
//   }
//
//   // Do other things
// });

async function isSignedIn() {

  console.log('from isSignedIn method: ', authentication.currentUser);
  return await authentication.currentUser != null;
}

async function getUserUId() {
  if (authentication.currentUser != null) {
    return authentication.currentUser.uid;
  } else {
    return null;
  }
}

async function getUserToken() {
  if (authentication.currentUser != null) {
    return await authentication.currentUser.getIdToken();
  }
  return null;
}

async function register(email, password) {
  await createUserWithEmailAndPassword(auth, email, password);


}

async function login(email, password) {
  await signInWithEmailAndPassword(auth, email, password);

}

async function signout() {
  authentication.signOut().then().catch((e) => console.log(e.message));
}

async function forgotpassword(email) {
  await sendPasswordResetEmail(auth, email)
  .then(() => {
    alert('Password reset email sent!')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}


export { register, login,signout,isSignedIn,getUserUId,getUserToken,forgotpassword };
