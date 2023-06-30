import AddOutlined from '@mui/icons-material/AddOutlined'
import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../'

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          bottom: 50,
          ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
          position: 'fixed',
          right: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}
