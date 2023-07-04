import {
  registerWithEmailPassword,
  signInGoogle,
} from '../../firebase/providers'
import { checkingCredentials, login, logout } from './authSlice'

export const startAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    // fetch for authentication data
  }
}

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
