import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import TurnedInNot from '@mui/icons-material/TurnedInNot'
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import PropTypes from 'prop-types'
import { setActiveNote } from '../../store'

export const SidebarItem = ({ id, body, title, note }) => {
  const newTitle = useMemo(() => {
    return title.length >= 17 ? `${title.substring(0, 16)}...` : title
  }, [title])
  const dispatch = useDispatch()

  const handleNoteClick = () => {
    dispatch(setActiveNote(note))
  }
  return (
    <ListItem key={id} disablePadding>
      <ListItemButton onClick={handleNoteClick}>
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
  note: PropTypes.object.isRequired,
}
