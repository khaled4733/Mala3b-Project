import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  setDoc,
  doc,
  query,
  where,
  updateDoc,
  deleteField,
  arrayUnion,
  arrayRemove,
  deleteDoc
} from "firebase/firestore";
import { getUserUId } from "./Auth";
import {app, db} from "./Config";

const firestoreDB = getFirestore(app);

async function addUser(user) {
    try {
        await setDoc(doc(firestoreDB, "users", user.id),  user );
        console.log("Document written with ID: ", user.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

async function addUsersToDocuments(collectionName,docId,userCollection){
    console.log("inside "+collectionName)
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, {
        users:userCollection
    });
}


async function getUsers() {
    const usersCol = collection(firestoreDB, "users");
    const userSnapshot = await getDocs(usersCol);
    const userList =  userSnapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()};
    });
    console.log(userList);
    return userList;
}

 async function getUserById(id) {
    const usersRef = collection(firestoreDB, "users");
    const q = query(usersRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()};
    });
}

//                    F-> for "football"
 async function updateFAvailable(tempDoc) {
     try {
         console.log(tempDoc);
         await setDoc(doc(db, "football", tempDoc.id), tempDoc); //if document with "tempDoc.id" not found add it, else update it
     } catch (e) {
         console.error(e);
     }

}


async function editUser(user) {
  console.log("edit user", user);
  await setDoc(doc(db, "users", user.id), user);
}



export {getUsers, addUser,updateFAvailable,addUsersToDocuments , getUserById };
