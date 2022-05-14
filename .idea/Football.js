import { db } from "../Config";
import { addDoc, collection, getDocs, getFirestore, setDoc, doc, query, where } from "firebase/firestore";

async function addFStadium(url, Name, photo, price) {

    try {
        const docRef = await addDoc(collection(db, "football"), {
            link: url,
            name: Name,
            pic: photo,
            price: price
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function getFStadium(){
    const querySnapshot = await getDocs(collection(db, "football"))
    const stadiumList = querySnapshot.docs.map((doc) => {
        return {id: doc.name, ...doc.data()};
    });
    console.log(stadiumList);
    return stadiumList;
}



export { addFStadium , getFStadium };