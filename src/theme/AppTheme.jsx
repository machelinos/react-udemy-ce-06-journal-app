import { ThemeProvider } from '@mui/material'
import PropTypes from 'prop-types'
import { purpleTheme } from './purpleTheme'

export const AppTheme = ({ children }) => {
  return <ThemeProvider theme={purpleTheme}>{children}</ThemeProvider>
}

AppTheme.propTypes = {
  children: PropTypes.object,
}
