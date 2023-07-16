import {
  authSlice,
  checkingCredentials,
  login,
  logout,
} from '../../../src/store/auth/authSlice'
import {
  authenticatedState,
  demoUser,
  initialState,
  notAuthenticatedState,
} from '../../fixtures/authFixtures'

describe('authSlice tests', () => {
  test('should load the initial state and be called "auth"', () => {
    expect(authSlice.name).toBe('auth')

    const state = authSlice.reducer(initialState, {})
    expect(state).toEqual(initialState)
  })

  test('should authenticate', () => {
    const state = authSlice.reducer(initialState, login(demoUser))
    expect(state).toEqual({
      status: 'authenticated',
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null,
    })
  })

  test('should logout without arguments', () => {
    const state = authSlice.reducer(authenticatedState, logout())
    expect(state).toEqual(notAuthenticatedState)
  })

  test('should logout with error message', () => {
    const errorMessage = 'There was an error login out'
    const state = authSlice.reducer(
      authenticatedState,
      logout({ errorMessage }),
    )
    expect(state).toEqual({
      ...notAuthenticatedState,
      errorMessage,
    })
  })

  test('should change state to checking', () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials())

    console.log(state)

    expect(state).toEqual({
      ...authenticatedState,
      status: 'checking',
    })
  })
})
