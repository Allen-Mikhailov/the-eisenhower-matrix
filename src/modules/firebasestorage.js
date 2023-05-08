import { auth, firestore } from "../modules/firebaseStuff";
import { collection, setDoc, getDocs, getDoc, doc } from "firebase/firestore";
import {useAuthState} from "react-firebase-hooks/auth"

const localStorage = window.localStorage

const storeData = async (coll, key, value) => {
    try {
      await setDoc(new doc(new collection(firestore, coll), key), value)
    } catch (e) {
      console.log(e)
    }
  }

  const getJsonData = async (coll, key) => {
    try {
      const docsnap = await getDoc(new doc(new collection(firestore, coll), key))
      console.log(docsnap.data())
      return docsnap.data() || {}
    } catch(e) {
      console.log(e)
    }
  }


export { storeData, getJsonData }