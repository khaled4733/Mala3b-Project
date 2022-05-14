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

async function getStadiums() {
    const stadiumCol = collection(db, "Fields");
    const stadiumSnapshot = await getDocs(stadiumCol);
    const stadiumList = stadiumSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    return stadiumList;
}

export {getStadiums};