import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PublicRouter = ({ children }) => {
  const { status } = useSelector((state) => state.auth)

  return status !== 'authenticated' ? children : <Navigate to="/" />
}

PublicRouter.propTypes = {
  children: PropTypes.object,
}
