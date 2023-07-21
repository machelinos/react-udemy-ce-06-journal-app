import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { LoginPage } from '../../../src/auth/pages/LoginPage'
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../../../src/store/auth/authSlice'
import { startGoogleSignIn } from '../../../src/store/auth/thunks'
import { notAuthenticatedState } from '../../fixtures/authFixtures'

const mockStartGoogleSignIn = jest.fn()
const mockStartSignInWithEmailPassword = jest.fn()

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn(),
}))

jest.mock('../../../src/store/auth/thunks', () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
  startSignInWithEmailPassword: (email, password) => () =>
    mockStartSignInWithEmailPassword(email, password),
}))

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: {
    auth: notAuthenticatedState,
  },
})

describe('<LoginPage /> tests', () => {
  beforeEach(() => jest.clearAllMocks())
  test('should render the component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>,
    )

    expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1)
  })

  test('should call dispatch with startGoogleSignIn() whwn clicking on the Google button', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>,
    )

    const googleBtn = screen.getByLabelText('google-btn')
    fireEvent.click(googleBtn)

    expect(mockStartGoogleSignIn).toHaveBeenCalled()
  })

  test('should call dispatch with startSignInWithEmailPassword(email, password) when submitting the form', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>,
    )

    const user = 'marcelcabrera@gmail.com'
    const password = '123456'

    const userField = screen.getByRole('textbox', { name: 'Email' })
    fireEvent.change(userField, { target: { name: 'email', value: user } })

    const passwordField = screen.getByTestId('password')
    fireEvent.change(passwordField, {
      target: { name: 'password', value: password },
    })

    const loginForm = screen.getByLabelText('login-form')
    fireEvent.submit(loginForm)

    expect(mockStartSignInWithEmailPassword).toHaveBeenCalledWith(
      user,
      password,
    )
  })
})
