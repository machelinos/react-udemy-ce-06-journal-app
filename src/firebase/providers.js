import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { FirebaseAuth } from './config'

const provider = new GoogleAuthProvider()

export const signInGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, provider)

    const { displayName, email, photoURL, uid } = result.user

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  }
}

export const registerWithEmailPassword = async (
  email,
  password,
  displayName,
) => {
  try {
    const result = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    )
    const { photoURL, uid } = result.user

    await updateProfile(FirebaseAuth.currentUser, {
      displayName,
    })

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  }
}

export const signInWithEmailPassword = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    )

    const { displayName, photoURL, uid } = result.user

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  }
}

export const signOutFirebase = async () => {
  try {
    await signOut(FirebaseAuth)
    return {
      ok: true,
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  }
}
