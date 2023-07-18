import {
  registerWithEmailPassword,
  signInGoogle,
  signInWithEmailPassword,
  signOutFirebase,
} from '../../../src/firebase/providers'
import {
  checkingCredentials,
  login,
  logout,
} from '../../../src/store/auth/authSlice'
import {
  startCheckingAuthentication,
  startGoogleSignIn,
  startRegisterWithEmailPassword,
  startSignInWithEmailPassword,
  startSignOut,
} from '../../../src/store/auth/thunks'
import { demoUser } from '../../fixtures/authFixtures'

jest.mock('../../../src/firebase/providers')

beforeEach(() => jest.clearAllMocks())

describe('Auth thunks tests', () => {
  const dispatch = jest.fn()
  test('should call dispatch with checkingCredentials()', async () => {
    await startCheckingAuthentication()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
  })

  test('should call dispatch with checkingCredentials and login - Success', async () => {
    const resp = { ok: true, ...demoUser }

    signInGoogle.mockReturnValue({
      ...resp,
    })

    await startGoogleSignIn()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(login(resp))
  })

  test('should call dispatch with checkingCredentials and logout - Error', async () => {
    const resp = {
      ok: false,
      displayName: null,
      email: null,
      photoURL: null,
      uid: null,
      errorCode: 500,
      errorMessage: 'Couldnt login Google',
    }

    signInGoogle.mockReturnValue({
      ...resp,
    })

    await startGoogleSignIn()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(logout(resp))
  })

  test('should call dispatch with checkingCredentials and login - Success', async () => {
    const resp = { ok: true, ...demoUser }

    registerWithEmailPassword.mockReturnValue({
      ...resp,
    })

    await startRegisterWithEmailPassword({
      email: demoUser.email,
      password: '123456',
      displayName: demoUser.displayName,
    })(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(login(resp))
  })

  test('should call dispatch with checkingCredentials and logout - Fail', async () => {
    const resp = {
      ok: false,
      displayName: null,
      email: null,
      photoURL: null,
      uid: null,
      errorCode: 500,
      errorMessage: 'Couldnt register Google',
    }

    registerWithEmailPassword.mockReturnValue({
      ...resp,
    })

    await startRegisterWithEmailPassword({
      email: demoUser.email,
      password: '123456',
      displayName: demoUser.displayName,
    })(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(logout(resp))
  })

  test('should call dispatch with checkingCredentials() and  login(resp) - Success', async () => {
    const resp = {
      ok: true,
      ...demoUser,
    }

    signInWithEmailPassword.mockReturnValue({
      ...resp,
    })

    await startSignInWithEmailPassword(demoUser.email, '123456')(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(login(resp))
  })

  test('should call dispatch with checkingCredentials() and  login(resp) - Success', async () => {
    const resp = {
      ok: false,
      displayName: null,
      email: null,
      photoURL: null,
      uid: null,
      errorCode: 500,
      errorMessage: 'Couldnt sign in Google',
    }

    signInWithEmailPassword.mockReturnValue({
      ...resp,
    })

    await startSignInWithEmailPassword(demoUser.email, '123456')(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(logout(resp))
  })

  test('should call dispatch with checkingCredentials() and logout({ errorMessage: null }) - Success', async () => {
    const resp = {
      ok: true,
    }

    signOutFirebase.mockReturnValue({
      ...resp,
    })

    await startSignOut()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(logout({ errorMessage: null }))
  })

  test('should call dispatch with checkingCredentials() and no logout({ errorMessage: null }) - Fail', async () => {
    const resp = {
      ok: false,
    }

    signOutFirebase.mockReturnValue({
      ...resp,
    })

    await startSignOut()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledTimes(1)
  })
})
