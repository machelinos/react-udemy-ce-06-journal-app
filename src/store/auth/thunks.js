import {
  registerWithEmailPassword,
  signInGoogle,
  signInWithEmailPassword,
} from '../../firebase/providers'
import { checkingCredentials, login, logout } from './authSlice'

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const resp = await signInGoogle()

    console.log({ resp })

    if (!resp.ok) return dispatch(logout(resp))

    return dispatch(login(resp))
  }
}

export const startRegisterWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const resp = await registerWithEmailPassword(email, password, displayName)

    if (!resp.ok) return dispatch(logout(resp))

    return dispatch(login(resp))
  }
}

export const startSignInWithEmailPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const resp = await signInWithEmailPassword(email, password)

    if (!resp.ok) return dispatch(logout(resp))

    return dispatch(login(resp))
  }
}
