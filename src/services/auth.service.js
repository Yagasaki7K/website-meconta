import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { query, where, collection, getDocs } from "firebase/firestore";
import { auth, database } from "../../client";

const permissionsCollectionRef = collection(database, "permissions");

class authService {
    queryByUsersInAccessOne = async (uid) => {
        const selectedUsers = await getDocs(
            query(permissionsCollectionRef, where("acesso", "==", true))
        );

        const users = selectedUsers.docs.map((doc) => doc.id);

        for (let index = 0; index < users.length; index++) {
            if (users[index] === uid) {
                return true;
            }
        }
    };

    signInGoogle = async () => {
        const provider = new GoogleAuthProvider();
        return await signInWithPopup(auth, provider).then(() => {
            window.location.href = "/dashboard";
        });
    };

    signOutGoogle = async () => {
        return await signOut(auth);
    };

    stateAuthentication = () => {
        return new Promise((resolve, reject) => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    const infos = {
                        id: user.uid,
                        name: user.displayName,
                        photo: user.photoURL,
                    };
                    resolve(infos);
                } else {
                    reject("Este usuário não está autenticado!");
                }
                unsubscribe();
            });
        });
    };
}

export default new authService();
