import { collection, doc, setDoc, updateDoc } from 'firebase/firestore'
import { FirebaseFirestore } from '../../firebase/config'
import {
  addNewEmptyNote,
  savingNote,
  setActiveNote,
  setNotes,
  updateNote,
} from './'
import { getNotes } from '../../helpers'

export const startAddNewEmptyNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNote())

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const { uid } = getState().auth

    const newDoc = doc(collection(FirebaseFirestore, `${uid}/journal/notes`))
    const respSetDoc = await setDoc(newDoc, newNote)

    newNote.id = newDoc.id

    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
  }
}

export const startGettingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth

    const notes = await getNotes(uid)

    dispatch(setNotes(notes))
  }
}

export const startUpdatingNote = (note) => {
  return async (dispatch, getState) => {
    dispatch(savingNote())

    const { uid } = getState().auth

    const docRef = doc(FirebaseFirestore, `${uid}/journal/notes/${note.id}`)

    await updateDoc(docRef, note)

    dispatch(setActiveNote(note))
    dispatch(updateNote(note))
  }
}
