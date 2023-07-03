import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import Google from '@mui/icons-material/Google'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startAuthentication, startGoogleSignIn } from '../../store'

export const LoginPage = () => {
  const { email, password, formState, handleInputChange } = useForm({
    email: 'marcel.cabrera@gmail.com',
    password: '123456',
  })
  const dispatch = useDispatch()

  const { status } = useSelector((state) => state.auth)
  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(startAuthentication())
  }

  const handleGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              placeholder="email@google.com"
              value={email}
              type="email"
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
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
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
