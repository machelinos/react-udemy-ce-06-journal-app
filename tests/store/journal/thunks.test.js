import { collection, deleteDoc, getDocs } from 'firebase/firestore'
import {
  addNewEmptyNote,
  savingNote,
  setActiveNote,
  startAddNewEmptyNote,
} from '../../../src/store/journal'
import { FirebaseFirestore } from '../../../src/firebase/config'

describe('Journal thunks tests', () => {
  const dispatch = jest.fn()
  const getState = jest.fn()

  beforeEach(() => jest.clearAllMocks())

  test('startAddNewEmptyNote should save to firebase and call dispatch with savingNote(), addNewEmptyNote(newNote) and setActiveNote(newNote)', async () => {
    const uid = 'TEST-UID'
    getState.mockReturnValue({ auth: { uid } })

    await startAddNewEmptyNote()(dispatch, getState)

    expect(dispatch).toHaveBeenCalledWith(savingNote())
    expect(dispatch).toHaveBeenCalledWith(
      addNewEmptyNote({
        title: '',
        body: '',
        id: expect.any(String),
        date: expect.any(Number),
        imageUrls: [],
      }),
    )

    expect(dispatch).toHaveBeenCalledWith(
      setActiveNote({
        title: '',
        body: '',
        id: expect.any(String),
        date: expect.any(Number),
        imageUrls: [],
      }),
    )

    // Delete all notes (only for dev firebase server)
    const collRef = collection(FirebaseFirestore, `${uid}/journal/notes`)

    const docs = await getDocs(collRef)
    const docsPromises = []
    docs.forEach((doc) => {
      docsPromises.push(deleteDoc(doc.ref))
    })
    await Promise.all(docsPromises)
  })
})
