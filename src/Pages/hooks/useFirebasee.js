import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import initializeFirebase from "../Firebase/firebase.initialize";

initializeFirebase();
const useFirebasee = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [admin, setAdmin] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = (navigate, from) => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setError("");
                const newUser = { displayName: result.user.displayName, email: result.user.email };


                setUser(newUser);
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then()
                navigate(from, { replace: true });
            }).catch((error) => {
                setError(error.message);
            });
    }
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
        });
    }
    useEffect(() => {

        fetch(`http://localhost:5000/users/admin?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)

            })
    }, [user.email])
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // ...
                setUser(user);
            } else {
                // User is signed out
                // ...
                setUser({});
            }
        });
    }, [auth])
    return { user, error, googleSignIn, logOut, admin }
}
export default useFirebasee;
