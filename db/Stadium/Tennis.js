import { db } from "../Config";
import {
  getDocs,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

async function addTStadium(Tennis, id) {
  try {
    await setDoc(doc(db, "tennis", id), Tennis);
    console.log("Document written with ID: ", id);
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

async function updateTStadium(docId, Tennis) {
  try {
    await updateDoc(doc(db, "tennis", docId), Tennis);
    console.log("Document updated with ID: ", docId);
  } catch (error) {
    console.error("Error updateing document: ", error);
  }
}

export { addTStadium, getTStadium, deleteTStadium, updateTStadium };
