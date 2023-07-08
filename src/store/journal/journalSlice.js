import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    activeNote: null,
    /* activeNote: {
      id: '1234',
      title: '',
      body: '',
      date: 12234123,
      imageUrls: [],
    }, */
  },
  reducers: {
    addNewEmptyNote: (state, { payload }) => {
      state.notes.push(payload)
      state.isSaving = false
    },
    setActiveNote: (state, { payload }) => {
      state.activeNote = payload
      state.isSaving = false
      state.messageSaved = ''
    },
    savingNote: (state) => {
      state.isSaving = true
      state.messageSaved = ''
    },
    setNotes: (state, { payload }) => {
      state.notes = payload
    },
    updateNote: (state, { payload }) => {
      state.notes = state.notes.map((note) => {
        if (note.id === payload.id) {
          return payload
        }

        return note
      })
      state.messageSaved = `"${payload.title}" updated successfully`
    },
    setImagesToActiveNote: (state, { payload }) => {
      state.activeNote.imageUrls = [...state.activeNote.imageUrls, ...payload]
      state.isSaving = false
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  savingNote,
  setActiveNote,
  setImagesToActiveNote,
  setNotes,
  updateNote,
} = journalSlice.actions
