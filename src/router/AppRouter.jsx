import { useSelector } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { CheckingAuth } from '../ui'

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth)

  if (status === 'checking') return <CheckingAuth />

  const router = createBrowserRouter(AppRoutes)
  return <RouterProvider router={router} />
}
