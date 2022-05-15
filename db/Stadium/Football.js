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

async function addFStadium(Football) {
  try {
    const docRef = await addDoc(collection(db, "football"), Football);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getFStadium() {
  const stadiumsCol = collection(db, "football");
  const stadiumsSnapshot = await getDocs(stadiumsCol);
  const stadiumList = stadiumsSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  console.log(stadiumList);
  return stadiumList;
}



async function deleteFStadium(id) {
  try {
    await deleteDoc(doc(db, "football", id));
    console.log("Document deleted with ID: ", id);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}

export { addFStadium, getFStadium, deleteFStadium };
