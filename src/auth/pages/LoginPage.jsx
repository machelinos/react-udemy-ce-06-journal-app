import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import Google from '@mui/icons-material/Google'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>
          <Grid item xs={12}>
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
          <Grid item xs={12} md={6}>
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Button variant="contained" fullWidth>
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
