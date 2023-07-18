import { useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Grid, TextField, Typography } from '@mui/material'
import DeleteOutline from '@mui/icons-material/DeleteOutline'
import SaveOutlined from '@mui/icons-material/SaveOutlined'
import UploadFileOutlined from '@mui/icons-material/UploadFileOutlined'
import dayjs from 'dayjs'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { ImageGallery } from '../'
import { useForm } from '../../hooks/useForm'
import {
  setActiveNote,
  startDeletingNote,
  startUpdatingNote,
  startUploadingImages,
} from '../../store'

const formValidations = {
  title: [(value) => value.length >= 3, 'Title must be at least 3 characters'],
  body: [
    (value) => value.length >= 3,
    'Body text must be at least 3 characters',
  ],
}

export const NoteView = () => {
  const { activeNote, isSaving, messageSaved } = useSelector(
    (state) => state.journal,
  )

  const { title, body, date, handleInputChange, formState } = useForm(
    activeNote,
    formValidations,
  )

  const dateString = useMemo(() => {
    return dayjs(date).format('MMMM D, YYYY')
  }, [date])

  const dispatch = useDispatch()

  const fileInputRef = useRef()

  const handleSaving = () => {
    dispatch(startUpdatingNote(formState))
  }

  const handleFileUploadClick = () => {
    fileInputRef.current.click()
  }

  const handleFileInputChange = ({ target }) => {
    if (target.files.length === 0) return

    dispatch(startUploadingImages(target.files))
  }

  const handleDeleteNote = () => {
    // dispatch startDeletingNote
    dispatch(startDeletingNote(activeNote.id))
  }

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Note updated', messageSaved, 'success')
    }
  }, [messageSaved])

  useEffect(() => {
    dispatch(setActiveNote(formState))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState])

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>

      <input
        type="file"
        multiple
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileInputChange}
      />

      <Grid item>
        <Button disabled={isSaving} onClick={handleFileUploadClick}>
          <UploadFileOutlined />
        </Button>

        <Button
          color="primary"
          sx={{ padding: 2 }}
          disabled={isSaving}
          onClick={handleSaving}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField
          name="title"
          type="text"
          variant="filled"
          fullWidth
          placeholder="Add a title"
          sx={{ border: 'none', mb: 1 }}
          value={title}
          onChange={handleInputChange}
        />

        <TextField
          name="body"
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What did you do today?"
          minRows={5}
          value={body}
          onChange={handleInputChange}
        />
      </Grid>

      <ImageGallery />

      <Grid container justifyContent="start" sx={{ mt: 2, mb: 2 }}>
        <Button color="error" onClick={handleDeleteNote} disabled={isSaving}>
          <DeleteOutline />
          Delete Note
        </Button>
      </Grid>
    </Grid>
  )
}
