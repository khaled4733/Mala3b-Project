import { db } from "../Config";
import { addDoc, collection, getDocs, getFirestore, setDoc, doc, query, where } from "firebase/firestore";

async function addTStadium() {
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

export { addTStadium, getTStadium };