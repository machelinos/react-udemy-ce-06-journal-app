import { useMemo } from 'react'
import TurnedInNot from '@mui/icons-material/TurnedInNot'
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import PropTypes from 'prop-types'

export const SidebarItem = ({ id, body, title }) => {
  const newTitle = useMemo(() => {
    return title.length >= 17 ? `${title.substring(0, 16)}...` : title
  }, [title])
  return (
    <ListItem key={id} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>

        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}

SidebarItem.propTypes = {
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
