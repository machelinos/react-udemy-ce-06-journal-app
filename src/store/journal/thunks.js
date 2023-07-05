import { collection, doc, setDoc } from 'firebase/firestore'
import { FirebaseFirestore } from '../../firebase/config'
import { addNewEmptyNote, savingNote, setActiveNote } from './'

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
