import { initializeApp } from 'firebase/app'

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCc4m7Zm_owWF_IqETnu9dQmYyRvufJFSQ",
  authDomain: "feudal-drip-db.firebaseapp.com",
  projectId: "feudal-drip-db",
  storageBucket: "feudal-drip-db.appspot.com",
  messagingSenderId: "123484408815",
  appId: "1:123484408815:web:98bd4bcd40b0ee1569041a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log('userDocRef', userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log('userSnapshot :>> ', userSnapshot);
  console.log('userSnapshot :>> ', userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })

    } catch (error) {
      console.log('error creating the user', error)
      throw error
    }
  }

  return userDocRef

}