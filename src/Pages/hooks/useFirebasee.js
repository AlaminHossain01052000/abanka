import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, getIdToken, updateProfile } from "firebase/auth";
import initializeFirebase from "../Firebase/firebase.initialize";

initializeFirebase();
const useFirebasee = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [admin, setAdmin] = useState("");
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = (navigate, from) => {
        setLoading(true);
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
            }).finally(() => setLoading(false))

            ;
    }
    const registerNewUser = (name, email, password, location, navigate) => {
        setLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { displayName: name, email: email };
                setUser(newUser);

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Set User Display Name

                }).catch((error) => {
                    // An error occurred At the time of setting user displayName

                });
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                }).then()



                setLoading(false);
                setError("");
                const redirect_url = location?.state?.from || '/home';
                navigate(redirect_url);

            })
            .catch((error) => {


                setError(error.message);
            })
            .finally(() => setLoading(false))
            ;
    }
    const loginUser = (email, password, location, navigate) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {


                setError("");
                const redirect_url = location?.state?.from || "/";
                navigate(redirect_url);
            })
            .catch((error) => {

                setError(error.message);
            })
            .finally(() => setLoading(false))
            ;
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
        setLoading(true);
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
            setLoading(false);
        });
    }, [auth])
    return { user, error, googleSignIn, logOut, admin, registerNewUser, loginUser, loading }
}
export default useFirebasee;
