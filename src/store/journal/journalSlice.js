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
    },
    savingNote: (state) => {
      state.isSaving = true
    },
    setNotes: (state, { payload }) => {
      state.notes = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, savingNote, setActiveNote, setNotes } =
  journalSlice.actions
