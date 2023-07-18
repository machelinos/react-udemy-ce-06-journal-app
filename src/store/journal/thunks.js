import {
  collection,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { FirebaseFirestore } from '../../firebase/config'
import {
  addNewEmptyNote,
  deleteNote,
  savingNote,
  setActiveNote,
  setImagesToActiveNote,
  setNotes,
  updateNote,
} from './'
import { getNotes, uploadFile } from '../../helpers'

export const startAddNewEmptyNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNote())

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
      imageUrls: [],
    }

    const { uid } = getState().auth

    const newDoc = doc(collection(FirebaseFirestore, `${uid}/journal/notes`))
    await setDoc(newDoc, newNote)

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

export const startUploadingImages = (files = []) => {
  return async (dispatch) => {
    dispatch(savingNote())

    const imageUrls = await Promise.all(
      Array.prototype.map.call(files, uploadFile),
    )

    dispatch(setImagesToActiveNote(imageUrls))
  }
}

export const startDeletingNote = (id) => {
  return async (dispatch, getState) => {
    dispatch(savingNote())

    const { uid } = getState().auth
    const docRef = doc(FirebaseFirestore, `${uid}/journal/notes/${id}`)
    await deleteDoc(docRef)

    dispatch(deleteNote(id))
    dispatch(setActiveNote(null))
  }
}
