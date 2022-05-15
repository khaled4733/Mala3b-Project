import { db } from "../Config";
import {
    getDocs,
    doc,
    setDoc,
    addDoc,
    deleteDoc,
    collection,
    query,
    where,
    onSnapshot,
  } from "firebase/firestore";
async function addTStadium(Tennis) {
    try {
        const docRef = await addDoc(collection(db, "tennis"), Tennis);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

async function getTStadium() {
    const stadiumsCol = collection(db, "tennis");
    const stadiumsSnapshot = await getDocs(stadiumsCol);
    const stadiumList = stadiumsSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    console.log(stadiumList);
    return stadiumList;
}

async function deleteTStadium(id) {
    try {
      await deleteDoc(doc(db, "tennis", id));
      console.log("Document deleted with ID: ", id);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  }

export { addTStadium, getTStadium, deleteTStadium };