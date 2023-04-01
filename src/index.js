import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyB8FdQ7-HUvcTLhI_FjnaVhqGbY85fm8yM",
    authDomain: "bookmarks-on-fire.firebaseapp.com",
    projectId: "bookmarks-on-fire",
    storageBucket: "bookmarks-on-fire.appspot.com",
    messagingSenderId: "716967861150",
    appId: "1:716967861150:web:a678e25131eb2aec48148f",
    measurementId: "G-8TREVQPXVG"
})

const auth = getAuth(firebaseConfig);

// this detects auth state

onAuthStateChanged(auth, user =>{
    if(user != null ){
        console.log('logged in')
    }else{
        console.log('No user logged in')
    }
})