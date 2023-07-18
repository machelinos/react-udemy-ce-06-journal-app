import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { CheckingAuth } from '../ui'
import { useCheckAuth } from '../hooks'

export const AppRouter = () => {
  const { status } = useCheckAuth()
  if (status === 'checking') {
    return <CheckingAuth />
  }

  const router = createBrowserRouter(AppRoutes)
  return <RouterProvider router={router} />
}
