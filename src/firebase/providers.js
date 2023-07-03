import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
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
