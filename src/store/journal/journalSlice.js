import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: true,
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
    create: (state) => {
      console.log(state)
    },
  },
})

// Action creators are generated for each case reducer function
export const { create } = journalSlice.actions
