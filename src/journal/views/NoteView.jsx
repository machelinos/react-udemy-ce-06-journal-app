import SaveOutlined from '@mui/icons-material/SaveOutlined'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../'
import { useForm } from '../../hooks/useForm'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import dayjs from 'dayjs'

export const NoteView = () => {
  const { activeNote } = useSelector((state) => state.journal)
  const formValidations = {
    title: [
      (value) => value.length >= 3,
      'Title must be at least 3 characters',
    ],
    body: [
      (value) => value.length >= 3,
      'Body text must be at least 3 characters',
    ],
  }

  const { title, body, date, handleInputChange } = useForm(
    activeNote,
    formValidations,
  )

  const dateString = useMemo(() => {
    return dayjs(date).format('MMMM D, YYYY')
  }, [date])

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
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
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
    </Grid>
  )
}
