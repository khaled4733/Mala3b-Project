import {addDoc, collection, getDocs, getFirestore, setDoc, doc, query, where} from "firebase/firestore";
import {app} from "./Config";

const firestoreDB = getFirestore(app);


async function addUser(user) {
     await setDoc(doc(firestoreDB, "users",user.id), { user});
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

export async function getUserById(id) {
    const usersRef = collection(firestoreDB, "users");
    const q = query(usersRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()};
    });
}

function subscribe(callback) {
    const unsubscribe = onSnapshot(
        query(collection(db, "Chats")),
        (snapshot) => {
            const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
            snapshot.docChanges().forEach((change) => {
                if (callback) callback({ change, snapshot });
            });
        }
    );
    return unsubscribe;
}

export {getUsers, addUser,subscribe};