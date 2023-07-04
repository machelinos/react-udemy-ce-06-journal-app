import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseAuth } from '../firebase/config'
import { login, logout } from '../store'

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (!user) return dispatch(logout())

      const { displayName, email, uid, photoURL } = user

      return dispatch(login({ displayName, email, photoURL, uid }))
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    status,
  }
}
