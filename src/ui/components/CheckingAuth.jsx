import { CircularProgress, Grid } from '@mui/material'

export const CheckingAuth = () => {
  return (
    <Grid
      container
      alignItems="center"
      direction="row"
      justifyContent="center"
      spacing={0}
      sx={{ backgroundColor: 'primary.main', minHeight: '100vh', padding: 0 }}
    >
      <Grid item>
        <CircularProgress color="warning" />
      </Grid>
    </Grid>
  )
}
