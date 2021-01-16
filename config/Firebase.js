import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAG5EZGSbJV1uLVyoP6MEh4CEnb93AuL3Q",
    authDomain: "farm-1fa0f.firebaseapp.com",
    projectId: "farm-1fa0f",
    storageBucket: "farm-1fa0f.appspot.com",
    messagingSenderId: "914929589296",
    appId: "1:914929589296:web:943417ad7d5518693621f5",
    measurementId: "G-FPCBC4633S"
}

const Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

db.settings({
    timestampsInSnapshots: true
})

export default Firebase