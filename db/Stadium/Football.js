import { db } from "../Config";
import { addDoc, collection, getDocs, getFirestore, setDoc, doc, query, where } from "firebase/firestore";

async function addFStadium() {
}

async function getFStadium() {
    const chatsCol = collection(db, "football");
    const chatsSnapshot = await getDocs(chatsCol);
    const chatList = chatsSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    console.log(chatList);
    return chatList;
}

export { addFStadium, getFStadium };