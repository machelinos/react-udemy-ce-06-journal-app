import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react'
import { startRegisterWithEmailPassword } from '../../store'

const initialFormValues = {
  displayName: 'Machelinos',
  email: 'marcelcabrera@gmail.com',
  password: '123456',
}

const formValidations = {
  displayName: [
    (value) => {
      return value.length >= 1
    },
    'Username is required',
  ],
  email: [(value) => value.includes('@'), 'Email must contain @'],
  password: [
    (value) => value.length > 5,
    'Password must be at least 6 characters',
  ],
}

export const RegisterPage = () => {
  const {
    displayName,
    displayNameValid,
    email,
    emailValid,
    password,
    passwordValid,
    formState,
    handleInputChange,
    isFormValid,
  } = useForm(initialFormValues, formValidations)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { status, errorMessage } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!isFormValid) return
    setFormSubmitted(true)
    dispatch(startRegisterWithEmailPassword(formState))
  }

  return (
    <AuthLayout title="Register">
      <form
        className="animate__animated animate__fadeIn"
        onSubmit={handleSubmit}
      >
        <Grid container>
          <Grid item xs={12}>
            <TextField
              error={!!displayNameValid && formSubmitted}
              fullWidth
              helperText={displayNameValid}
              label="Name"
              name="displayName"
              placeholder="Your name"
              type="text"
              value={displayName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              placeholder="email@google.com"
              type="email"
              value={email}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              placeholder="Your password"
              type="password"
              value={password}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          {!!errorMessage && (
            <Grid item xs={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          )}

          <Grid item xs={12}>
            <Button
              disabled={isAuthenticating}
              type="submit"
              variant="contained"
              fullWidth
            >
              Create account
            </Button>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="end">
          <Typography>Already have an account</Typography>
          <Link
            component={RouterLink}
            color="inherit"
            to="/auth/login"
            sx={{ ml: 1 }}
          >
            <Typography>Login</Typography>
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  )
}
