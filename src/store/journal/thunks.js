import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { FirebaseFirestore } from '../../firebase/config'
import { addNewEmptyNote, savingNote, setActiveNote, setNotes } from './'
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
