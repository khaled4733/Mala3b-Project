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
  updateDoc,
} from "firebase/firestore";

async function addFStadium(Football , id) {
  try {
    await setDoc(doc(db, "football" , id), Football);
    console.log("Document written with ID: ", id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function deleteFStadium(docId) {
  try {
      await deleteDoc(doc(db, "football", docId));
      console.log("Document deleted with ID: ", docId);
  } catch (error) {
      console.error("Error deleting document: ", error);
  }
}

async function updateFStadium(docId , Football) {
  try {
      await updateDoc(doc(db, "football", docId) , Football);
      console.log("Document updated with ID: ", docId);
  } catch (error) {
      console.error("Error updateing document: ", error);
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



export { addFStadium, getFStadium, deleteFStadium ,updateFStadium };
