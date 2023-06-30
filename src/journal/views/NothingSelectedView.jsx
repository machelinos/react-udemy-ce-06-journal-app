import StarOutline from '@mui/icons-material/StarOutline'
import { Grid, Typography } from '@mui/material'

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      justifyContent="center"
      spacing={0}
      sx={{
        backgroundColor: 'primary.main',
        minHeight: 'calc(100vh - 120px)',
        padding: 0,
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: 'white' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" color="white">
          Select or create an entry
        </Typography>
      </Grid>
    </Grid>
  )
}
