import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    updateDoc,
} from "firebase/firestore";
import { database } from "../client";

const postCollectionRef = collection(database, "accounts");

class postService {
    addAccount = async (post) => {
        return await addDoc(postCollectionRef, post);
    };

    updateAccount = async (id, updateData) => {
        const postDoc = doc(database, "accounts", id);
        return await updateDoc(postDoc, updateData);
    };

    deleteAccount = async (id) => {
        const postDoc = doc(database, "accounts", id);
        return await deleteDoc(postDoc);
    };

    getAllAccount = async () => {
        const accounts = await getDocs(
            query(postCollectionRef, orderBy("date", "desc"))
        );
        return accounts;
    };

    getAccount = async (id) => {
        const postDoc = doc(database, "accounts", id);
        return await getDoc(postDoc);
    };
}

export default new postService();
