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
import {app, db} from "./Config";

const firestoreDB = getFirestore(app);


async function addUser(user) {
     await setDoc(doc(firestoreDB, "users",user.id), { user});
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
 async function updateFAvailable(docId, tempDoc) {
     try {
         console.log(tempDoc.date);
         const docRef = doc(db, "football", docId);
         console.log("entered updateFAvailable()")
         // await deleteDoc(doc(db, "football", docId)); //not working

         /*Delete Doc Herre*/
          await deleteFStadium(docId,tempDoc); //not working, delete from db !!!!

         //add new stadium with "available: false"
         await setDoc(docRef, {
             available: false,
             date: tempDoc.date,
             id: tempDoc.id,
             name: tempDoc.name,
             pic: tempDoc.pic,
             price: tempDoc.price
         }).then(console.log('available updated!'))
     } catch (e) {
         console.error(e);
     }
 }


async function deleteFStadium(docId) {
    try {
        const docRef = doc(db, "football", docId);
        await updateDoc(docRef,{
            available: deleteField(),
            date: deleteField(),
            id: deleteField(),
            name:deleteField(),
            pic:deleteField(),
            price:deleteField()
        })

        console.log("Document deleted with ID: ", docId);
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}




// function subscribe(callback) {
//     const unsubscribe = onSnapshot(
//         query(collection(db, "Chats")),
//         (snapshot) => {
//             const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
//             snapshot.docChanges().forEach((change) => {
//                 if (callback) callback({ change, snapshot });
//             });
//         }
//     );
//     return unsubscribe;
// }

export {getUsers, addUser,updateFAvailable,addUsersToDocuments};