import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'

export const AppRoutes = [
  {
    path: '/auth',
    children: AuthRoutes,
  },
  {
    path: '/',
    children: JournalRoutes,
  },
]
