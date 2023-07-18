import { Navigate } from 'react-router-dom'
import { JournalPage } from '../pages/JournalPage'
import { PrivateRouter } from '../../router/PrivateRouter'

export const JournalRoutes = [
  {
    index: true,
    element: (
      <PrivateRouter>
        <JournalPage />
      </PrivateRouter>
    ),
  },
  {
    path: '/*',
    element: (
      <PrivateRouter>
        <Navigate to="/" />
      </PrivateRouter>
    ),
  },
]
