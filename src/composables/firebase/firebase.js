import firebase from 'firebase/app'
// Add the Firebase services that you want to use
import 'firebase/firestore'
import 'firebase/auth'
import { useConfig } from '../../config'

const { firebaseConfig } = useConfig()

const fire = firebase.initializeApp(firebaseConfig)
const time = firebase.firestore.FieldValue.serverTimestamp
const db = fire.firestore()
const auth = fire.auth()

export { firebase, fire, db, time, auth }
