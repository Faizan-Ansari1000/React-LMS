import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import app from "./FirebaseConfig";

const firestore = getFirestore(app);
const auth = getAuth(app);


export const signUpUser = (obj) => {
    return createUserWithEmailAndPassword(auth, obj.email, obj.password)
};

export const loginUser = (obj) => {
    return signInWithEmailAndPassword(auth, obj.email, obj.password)
};

export const dataSet = async (nodeName, id, data) => {
    const docRef = doc(firestore, nodeName, id)
    await setDoc(docRef, data)
};

