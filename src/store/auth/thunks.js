import { checkingCredentials } from './authSlice'

export const startAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    // fetch for authentication data
  }
}

export const startGoogleSinIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    // fetch for authentication data
  }
}
