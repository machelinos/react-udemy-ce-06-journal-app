import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'

export const AppRouter = () => {
  const router = createBrowserRouter(AppRoutes)
  return <RouterProvider router={router} />
}
