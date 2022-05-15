import { db } from "../Config";
async function addBStadium(BasketBall) {
    try {
        const docRef = await addDoc(collection(db, "basketball"), BasketBall);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
import {addDoc, collection, getDocs, getFirestore, setDoc, doc, query, where, deleteDoc} from "firebase/firestore";



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

export { addBStadium, getBStadium, deleteBStadium };