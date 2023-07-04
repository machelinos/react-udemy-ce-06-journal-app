import { useSelector } from 'react-redux'
import TurnedInNot from '@mui/icons-material/TurnedInNot'
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import PropTypes from 'prop-types'

export const Sidebar = ({ drawerWidth }) => {
  const { displayName } = useSelector((state) => state.auth)

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        open
        variant="permanent"
        sx={{
          display: {
            xs: 'block',
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {['January', 'February', 'March'].map((item) => {
            return (
              <ListItem key={item} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>

                  <Grid container>
                    <ListItemText primary={item} />
                    <ListItemText secondary="Lorem iosum dolor sit amet" />
                  </Grid>
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Drawer>
    </Box>
  )
}

Sidebar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
}
