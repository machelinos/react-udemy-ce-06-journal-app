import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import Google from '@mui/icons-material/Google'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startGoogleSignIn, startSignInWithEmailPassword } from '../../store'

const initialFormState = {
  email: '',
  password: '',
}

const formValidations = {
  email: [
    (value) => value.length > 1 && value.includes('@'),
    'A valid email is required',
  ],
  password: [
    (value) => value.length > 5,
    'Password must be at least 6 characters',
  ],
}

export const LoginPage = () => {
  const {
    email,
    password,
    emailValid,
    passwordValid,
    isFormValid,
    handleInputChange,
  } = useForm(initialFormState, formValidations)
  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const { status, errorMessage } = useSelector((state) => state.auth)
  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)

    if (!isFormValid) return

    dispatch(startSignInWithEmailPassword(email, password))
  }

  const handleGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title="Login">
      <form
        aria-label="login-form"
        onSubmit={handleSubmit}
        className="animate__animated animate__fadeIn"
      >
        <Grid container>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              placeholder="email@google.com"
              value={email}
              type="email"
              error={!!emailValid && formSubmitted}
              helperText={formSubmitted && emailValid}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              inputProps={{ 'data-testid': 'password' }}
              fullWidth
              label="Password"
              name="password"
              placeholder="Your password"
              type="password"
              value={password}
              error={!!passwordValid && formSubmitted}
              helperText={formSubmitted && passwordValid}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
          {!!errorMessage && (
            <Grid item xs={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          )}
          <Grid item xs={12} md={6}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isAuthenticating}
            >
              Login
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Button
              aria-label="google-btn"
              variant="contained"
              disabled={isAuthenticating}
              fullWidth
              onClick={handleGoogleSignIn}
            >
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="end">
          <Link component={RouterLink} color="inherit" to="/auth/register">
            <Typography>Create account</Typography>
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  )
}
