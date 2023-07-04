import { Navigate } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { PublicRouter } from '../../router/PublicRouter'

export const AuthRoutes = [
  {
    index: true,
    element: (
      <PublicRouter>
        <Navigate to="/auth/login" />
      </PublicRouter>
    ),
  },
  {
    path: 'login',
    element: (
      <PublicRouter>
        <LoginPage />
      </PublicRouter>
    ),
  },
  {
    path: 'register',
    element: (
      <PublicRouter>
        <RegisterPage />
      </PublicRouter>
    ),
  },
  {
    path: '*',
    element: (
      <PublicRouter>
        <Navigate to="/auth/login" />
      </PublicRouter>
    ),
  },
]
