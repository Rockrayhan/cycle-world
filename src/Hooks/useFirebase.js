import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut, onAuthStateChanged , signInWithEmailAndPassword, updateProfile   } from "firebase/auth";


initializeFirebase() ;
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true) ;

    const auth = getAuth();
    const [admin , setAdmin] = useState(false) ;


    const registerUser = (email ,password , name , history) => {
      setIsloading(true);
        createUserWithEmailAndPassword(auth , email , password)
        .then((userCredential) => { 
          const newUser = {email , displayName: name};
          setUser(newUser) ;
          // save user to db 
          saveUser(email, name) ;
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
          }).catch((error) => {
          });
          history.replace('/') ;
          
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          })
          .finally(() => setIsloading(false));
    }



    const logout = () => {
      setIsloading(true) ;
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsloading(false));
    }



    const loginUser = (email , password , location , history) => {
      setIsloading(true);
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination = location?.state?.from || '/' ;
    history.replace(destination) ;
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
  .finally(() => setIsloading(false));
    }


    // user observer
    useEffect( () =>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              
              setUser(user)
            } else {
                setUser({})
              
            }
            setIsloading(false) ;
          });
          return () => unsubscribed;
    } , [] )

    useEffect( ()=>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then (data => setAdmin(data.admin))
    } ,[user.email])


    const saveUser = (email, displayName) =>{
        const user = {email, displayName} ;
        fetch ('http://localhost:5000/users' , {
          method: 'POST' ,
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then()
    }

    return{
        user, 
        admin,
        registerUser,
        logout,
        loginUser,
        isLoading,

    }

}

export default useFirebase;