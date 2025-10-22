import { db } from "../Config";
import {
  updateDoc,
  addDoc,
  collection,
  getDocs,
  getFirestore,
  setDoc,
  doc,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";

async function addBStadium(BasketBall, id) {
  try {
    await setDoc(doc(db, "basketball", id), BasketBall);
    console.log("Document written with ID: ", id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getBStadium() {
  const stadiumsCol = collection(db, "basketball");
  const stadiumsSnapshot = await getDocs(stadiumsCol);
  const stadiumList = stadiumsSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  console.log(stadiumList);
  return stadiumList;
}

async function deleteBStadium(id) {
  try {
    await deleteDoc(doc(db, "basketball", id));
    console.log("Document deleted with ID: ", id);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}

async function updateBStadium(docId, BasketBall) {
  try {
    await updateDoc(doc(db, "basketball", docId), BasketBall);
    console.log("Document updated with ID: ", docId);
  } catch (error) {
    console.error("Error updateing document: ", error);
  }
}

export { addBStadium, getBStadium, deleteBStadium, updateBStadium };
