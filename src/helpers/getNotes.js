import { collection, getDocs } from 'firebase/firestore'
import { FirebaseFirestore } from '../firebase/config'

export const getNotes = async (uid = '') => {
  console.log({ uid })
  if (!uid) throw new Error('Error getting notes: no valid user id')

  let notes = []
  const querySnapshot = await getDocs(
    collection(FirebaseFirestore, `${uid}/journal/notes`),
  )

  querySnapshot.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() })
  })

  return notes
}
