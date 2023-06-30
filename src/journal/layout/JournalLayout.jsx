import { Box, Toolbar } from '@mui/material'
import PropTypes from 'prop-types'
import { Navbar } from '../components'
import { Sidebar } from '../components/Sidebar'

const drawerWidth = 240

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWidth={drawerWidth} />

      <Sidebar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar></Toolbar>

        {children}
      </Box>
    </Box>
  )
}

JournalLayout.propTypes = {
  children: PropTypes.object.isRequired,
}
