import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              placeholder="Your name"
              type="text"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Email"
              placeholder="email@google.com"
              type="email"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Password"
              placeholder="Your password"
              type="password"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth>
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
