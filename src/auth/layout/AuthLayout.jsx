import { Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      justifyContent="center"
      spacing={0}
      sx={{ backgroundColor: 'primary.main', minHeight: '100vh', padding: 0 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
          width: { md: 450 },
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}
