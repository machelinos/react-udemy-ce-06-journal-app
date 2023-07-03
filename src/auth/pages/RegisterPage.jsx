import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'

const initialFormValues = {
  displayName: 'Joy Marcelle',
  email: 'mail@test.com',
  password: '123456',
}

export const RegisterPage = () => {
  const { displayName, email, password, formState, handleInputChange } =
    useForm(initialFormValues)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              fullWidth
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
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
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
