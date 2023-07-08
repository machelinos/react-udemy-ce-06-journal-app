import { useDispatch, useSelector } from 'react-redux'
import AddOutlined from '@mui/icons-material/AddOutlined'
import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../'
import { startAddNewEmptyNote } from '../../store'

export const JournalPage = () => {
  const dispatch = useDispatch()
  const { isSaving, activeNote } = useSelector((state) => state.journal)

  const handleAddNewNote = () => {
    dispatch(startAddNewEmptyNote())
  }

  return (
    <JournalLayout>
      {activeNote ? <NoteView /> : <NothingSelectedView />}(
      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          bottom: 50,
          ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
          ':disabled': { backgroundColor: '#dddddd', opacity: 0.8 },
          position: 'fixed',
          right: 50,
        }}
        disabled={isSaving}
        onClick={handleAddNewNote}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
      )
    </JournalLayout>
  )
}
